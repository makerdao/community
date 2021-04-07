import calculateTreeData from "@modules/navigation/calculateTreeData";
import SearchInput from "@modules/search/SearchInput";
import groupBy from "lodash/groupBy";
import LUNR from "lunr";
import queryString from "query-string";
/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { useTranslation } from "@modules/localization";
import { Link, MobileNav } from "@modules/navigation";
import { Button, Select } from "@modules/ui";
import { useLocation, useNavigate } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { min } from "lodash";
import { Flex, jsx } from "theme-ui";
import { console } from "window-or-global";

import BlogResult from "../../modules/blog/BlogResult";
import Search from "../../modules/search";

const SearchResults = () => {
  const resultsPerPage = 5;
  const { search } = useLocation();
  const query = queryString.parse(search).query || null;

  const [lunr, setLunr] = useState(null);
  const [currentQuery, setQuery] = useState(query);
  const [results, setResults] = useState(null);
  const [contentCurrentPage, setContentCurrentPage] = useState(0);
  const [blogCurrentPage, setBlogCurrentPage] = useState(0);
  const navigate = useNavigate();
  const { locale, t, DEFAULT_LOCALE, allLocales } = useTranslation();
  const { allMdx } = useStaticQuery(graphql`
    query getMobileNavData {
      # Regex for all files that are NOT config files
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "/content/([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
              order
            }
          }
        }
      }
    }
  `);

  const { sidenavData } = calculateTreeData(
    allMdx.edges,
    "search",
    DEFAULT_LOCALE,
    locale,
    ""
  );

  function runQuery() {
    //Lunr exists, we haven't attempted to get results, and query isn't null or empty
    if (lunr !== null && query !== null && query !== "") {
      //Attempt to get results
      const lunrQuery = query
        .trim() // remove trailing and leading spaces
        .replace(/\s/g, "*") // remove user's wildcards
        .toLowerCase();

      const lunrLocalized = lunr[locale] || lunr[DEFAULT_LOCALE];

      const results = groupBy(
        lunrLocalized.index
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
          .map(({ ref }) => {
            return lunr[locale].store[ref];
          }),
        (o) => o.isBlog
      ); //Group the elements based on whether "isBlog" is true or not.
      //NOTE(Rejon): This is crunchy as hell, but it works.
      //             The keys returned from the grouping are based on the value of "isBlog"

      setResults({
        content: results["false"] || [],
        blog: results["true"] || [],
      });
    }
  }

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
    runQuery();
  }, [query]);

  //NOTE(Rejon): Only runs when lunr mounts, I do it seperately cause React complains about the lunr
  //             object being different when the query is set as a second parameter in the array
  useEffect(() => {
    runQuery();
  }, [lunr]);

  const onSubmit = (val) => {
    //Update page search query appropriately
    navigate(`/${locale}/search?query=${val}`);
    runQuery();
  };

  const ContentResult = ({ url, title, excerpt }) => {
    let initialSection = url.split("/")[2] || null;

    return (
      <div
        sx={{
          px: [0, 0, "32px"],
          pt: "34px",
          pb: "50px",
          borderBottom: "1px solid",
          borderColor: "muted",
        }}
      >
        {initialSection && (
          <Link
            to={`/${locale}/${initialSection}/`}
            sx={{
              fontWeight: 400,
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            {initialSection}
          </Link>
        )}
        <Link to={url} sx={{ color: "text" }}>
          <h2
            sx={{
              fontWeight: 500,
              fontSize: "32px",
              mb: "28px",
            }}
          >
            {title}
          </h2>
        </Link>
        <p sx={{ mt: "26px" }}>{excerpt}</p>
      </div>
    );
  };

  const onSelectChange = ({ value, label }) => {
    //Update local storage on switch
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", value.split("/")[1]);
    }

    //Google Analytics Tracking
    trackCustomEvent({
      category: "Language Selector",
      action: `Switch Search Language to ${label}`,
      label: `From Page: /search?query=${query} (${locale}) |  To Page: ${value} (${
        value.split("/")[1]
      })`,
    });

    navigate(value);
  };
  //TODO(Rejon): Update this to be correct for content result length.
  const showContentNextButton =
    results &&
    results.content.length > 0 &&
    (contentCurrentPage + 1) * resultsPerPage < results.content.length;

  //TODO(Rejon): Update this to be correct for blog result length!
  const showBlogNextButton =
    results &&
    results.blog.length > 0 &&
    (blogCurrentPage + 1) * resultsPerPage < results.blog.length;

  const noResults =
    results && results.blog.length === 0 && results.content.length === 0;

  return (
    <div
      sx={{
        width: "100%",
        paddingTop: ["30px", "30px", "128px"],
        paddingBottom: "118px",
      }}
    >
      {query && results !== null ? (
        <div
          sx={{
            textAlign: "center",
          }}
        >
          <div
            sx={{
              width: "100%",
              mb: 3,
              px: 4,
              display: ["block", "block", "none"],
            }}
          >
            <Select
              onChange={onSelectChange}
              options={allLocales.map((_loc) => {
                return {
                  value: `/${_loc}/search?query=${query}`,
                  label: t("Language", null, null, _loc),
                };
              })}
              aria-label={t("Blog_Language_Selector")}
              value={{
                value: `/${locale}`,
                label: t("Language"),
              }}
            />
          </div>
          <h1
            sx={{
              mt: 0,
              mb: "48px",
              fontSize: "48px",
            }}
          >
            {noResults ? "Sorry, no results for" : "Here's what we found for"}:{" "}
            <span sx={{ color: "primaryAlt" }}>{query}</span>
          </h1>
          <Flex
            sx={{
              borderRadius: "round",
              maxWidth: "523px",
              border: "1px solid",
              borderColor: "primary",
              margin: "auto",
              backgroundColor: "primaryMuted",
              position: "relative",
              alignItems: "center",
              mb: "72px",
              display: ["none", "none", "flex"],
            }}
          >
            <SearchInput alt onSubmit={onSubmit} defaultValue={query} />
          </Flex>

          <Flex sx={{ flexDirection: "column", px: [4, 4, 0] }}>
            <Flex
              sx={{
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
              }}
            >
              {results.content.length > 0 && (
                <h2
                  sx={{
                    fontWeight: 500,
                    fontSize: "32px",
                    pl: [0, 0, "32px"],
                    textAlign: "left",
                    alignSelf: "flex-start",
                  }}
                >
                  General
                </h2>
              )}
              <Flex
                sx={{
                  width: "100%",
                  justifyContent: "space-around",
                  textAlign: "left",
                }}
              >
                {results.content.length > 0 && (
                  <Flex
                    sx={{
                      flexDirection: "column",
                      flex: 1,
                      mb: "48px",
                      textAlign: "left",
                    }}
                  >
                    {results.content
                      .slice(0, resultsPerPage * (1 + contentCurrentPage))
                      .map((node, index) => (
                        <ContentResult
                          {...node}
                          key={`content-result-${index}`}
                        />
                      ))}
                  </Flex>
                )}
                {!noResults && (
                  <div
                    sx={{
                      pt: "24px",
                      pr: 4,
                      ml: "12.3%",
                      display: ["none", "none", "initial"],
                    }}
                  >
                    <p sx={{ textTransform: "uppercase" }}>{t("LANGUAGES")}</p>

                    <ul
                      sx={{
                        listStyleType: "none",
                        p: 0,
                      }}
                    >
                      {allLocales.map((_loc, index) => (
                        <li key={`available-blog-lang-${index}`}>
                          <Link to={`/${_loc}/search?query=${query}`}>
                            {t("Language", null, null, _loc)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Flex>
              {showContentNextButton && (
                <div sx={{ mb: ["50px", "50px", "114px"] }}>
                  <Button
                    outline
                    icon="plus"
                    sx={{ mr: 0 }}
                    onClick={() => {
                      setContentCurrentPage(contentCurrentPage + 1);
                    }}
                  >
                    {t("See_More_Posts")}
                  </Button>
                </div>
              )}
            </Flex>
            {results.blog.length > 0 && (
              <Flex
                sx={{
                  alignItems: "flex-start",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h2
                  sx={{
                    fontWeight: 500,
                    fontSize: "32px",
                    pl: [0, 0, "32px"],
                    textAlign: "left",
                    alignSelf: "flex-start",
                  }}
                >
                  Blog
                </h2>
                <Flex
                  sx={{
                    width: "100%",
                    maxWidth: ["100%", "100%", "81%"],
                    justifyContent: "space-around",
                    textAlign: "left",
                  }}
                >
                  <Flex
                    sx={{
                      flexDirection: "column",
                      flex: 1,
                      mb: "48px",
                      textAlign: "left",
                    }}
                  >
                    {results.blog
                      .slice(0, resultsPerPage * (1 + contentCurrentPage))
                      .map((node, index) => (
                        <BlogResult
                          {...node}
                          frontmatter={{ ...node }}
                          key={`content-result-${index}`}
                        />
                      ))}
                  </Flex>
                </Flex>
                {showBlogNextButton && (
                  <div sx={{ mb: ["50px", "50px", "114px"] }}>
                    <Button
                      outline
                      icon="plus"
                      sx={{ mr: 0 }}
                      onClick={() => {
                        setBlogCurrentPage(blogCurrentPage + 1);
                      }}
                    >
                      {t("See_More_Posts")}
                    </Button>
                  </div>
                )}
              </Flex>
            )}
          </Flex>
        </div>
      ) : (
        <></>
      )}
      <MobileNav sidenavData={sidenavData} />
    </div>
  );
};

export default SearchResults;
