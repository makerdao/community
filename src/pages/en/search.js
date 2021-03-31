/** @jsx jsx */
import React, {useState, useEffect} from 'react';

import LUNR from 'lunr';
import {useLocation, useNavigate} from '@reach/router';
import {jsx, Flex} from 'theme-ui';
import queryString from 'query-string';
import { useTranslation } from "@modules/localization";
import SearchInput from '@modules/search/SearchInput';
import Search from '../../modules/search';

const SearchResults = () => {
    const MAX_RESULT_COUNT = 5;
    const {search} = useLocation();
    const [lunr, setLunr] = useState(null);
    const [results, setResults] = useState(null);
    const navigate = useNavigate();

    const {locale, allLocales, t, DEFAULT_LOCALE} = useTranslation();

    const query = queryString.parse(search).query || null;

    console.log(query, allLocales)

    //LUNR becomes available only via the window.
    //To make it easier for our app to access it we just set it in our app context.
    useEffect(() => {
        if (typeof window !== undefined) {
        if (window.__LUNR__) {
            window.__LUNR__.__loaded.then((lunr) => setLunr(lunr));
        }
        }
    }, []);

    useEffect(() => {
        //Lunr exists, we haven't attempted to get results, and query isn't null or empty
        if (lunr !== null && results === null && query !== null && query !== '')
        {
            //Attempt to get results
            const lunrQuery = query
                .trim() // remove trailing and leading spaces
                .replace(/\s/g, "*") // remove user's wildcards
                .toLowerCase();
        
            const lunrLocalized = lunr[locale] || lunr[DEFAULT_LOCALE];
        
            const results = lunrLocalized.index
                .query((q) => {
                LUNR.tokenizer(lunrQuery).forEach(function (token) {
                    //Fuzzy Match
                    q.term(token.toString(), {
                    editDistance: lunrQuery.length >= 3 ? 2 : 0,
                    }); //<- If our token is longer than 5 characters, let the accidental distance be 2 letters (ie. "A" <- Z,Y,B,C are 2 distances away from A in both directions.)
                    //Wild card
                    q.term(token.toString(), {
                    //<- Wildcard treatment for our token specifically.
                    wildcard:
                        LUNR.Query.wildcard.LEADING | LUNR.Query.wildcard.TRAILING,
                    });
        
                    //Field boosts
                    q.term(token.toString(), { fields: ["title"], boost: 20 }); //<- Boost the value of our query for a specific field.
                    q.term(token.toString(), { fields: ["keywords"], boost: 15 });
                    q.term(token.toString(), { fields: ["excerpt"], boost: 5 });
                });
                })
                .slice(0, MAX_RESULT_COUNT)
                .map(({ ref }) => {
                    return lunr[locale].store[ref];
                });


            //Make sure to sift results between blog and normal results.
                //Set up the data to be faked for matching the BlogResult.
        
            setResults(results);
            console.log("Initial Results", results);
        }
    }, [lunr]);

    const onSubmit = (val) => {
            //Update page search query appropriately
            navigate('/search?query=${val}')
    }

    return (
        <div sx={{
            width: '100%',
            paddingTop: '128px'
        }}>
            {query ?
                <div sx={{
                    textAlign: 'center'
                }}>
                    <h1 sx={{
                        mt: 0,
                        mb: '48px',
                        fontSize: '48px',

                    }}>
                        Here's what we found for: {query}
                    </h1>
                    <Flex 
                        sx={{
                            borderRadius: "round",
                            maxWidth: '523px',
                            border: "1px solid",
                            borderColor: 'primary',
                            margin: 'auto',
                            backgroundColor: 'primaryMuted',
                            position: 'relative',
                            alignItems: 'center', 
                            mb: '72px'
                        }}
                    >
                        <SearchInput
                            alt
                            onSubmit={onSubmit}
                        />
                    </Flex>

                    <Flex>
                        <div>
                            <h3>General</h3>

                        </div>
                        <div>
                            Languages
                        </div>
                    </Flex>
                </div>
                :
                <div>
                    No query provided.
                </div>
            }
        </div>
    )
}

export default SearchResults;