/** @jsx jsx */
import { useState, useEffect, useRef } from "react";

import { Box, Flex, Text, jsx } from "theme-ui";
import LUNR from "lunr";
import { useNavigate } from "@reach/router";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { motion } from "framer-motion";

import { useTranslation } from "@modules/localization";
import SearchInput from "./SearchInput";
import SearchHit from "./SearchHit";

//Hook mostly to detect if there's a click outside of the results element.
//If a click is detected we hide the results.
const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const detectClickOutside = (event) => {
      if (!ref.current) {
        return;
      }

      !ref.current.contains(event.target) && handler();
    };
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
};

const useKeyPress = function (targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

export default function Search({ onClick, ...otherProps }) {
  const MAX_RESULT_COUNT = 5; //<- Return 5 results maximum.
  const ref = useRef();
  const resultList = useRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const [results, setResults] = useState([]);
  const [lunr, setLunr] = useState(null);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);

  const navigate = useNavigate();
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  useClickOutside(ref, () => setFocus(false));

  //On input change, run the search query and update our results state.
  const onChange = (val) => {
    if (lunr && val !== "") {
      const query = val
        .trim() // remove trailing and leading spaces
        .replace(/\s/g, "*") // remove user's wildcards
        .toLowerCase();

      const lunrLocalized = lunr[locale] || lunr[DEFAULT_LOCALE];

      const results = lunrLocalized.index
        .query((q) => {
          LUNR.tokenizer(query).forEach(function (token) {
            //Fuzzy Match
            q.term(token.toString(), {
              editDistance: query.length >= 3 ? 2 : 0,
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

      setResults(results);
    }

    if (val === "") {
      setResults([]);
    }

    setCursor(0);
    setQuery(val);
  };

  //On form submission, navigate to the url of the first element.
  // const onSubmit = () => {
  //   if (results.length > 0) {
  //     navigate(results[0].url);
  //     setFocus(false);
  //     onClick();
  //   }
  // };

  const resultsVariant = {
    visible: {
      opacity: 1,
      top: "64px",
      transition: { ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      top: "86px",
      transition: { ease: "easeOut" },
    },
  };

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
    if (results.length > 0 && downPress) {
      setCursor((prevState) =>
        prevState < results.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, results.length]);

  useEffect(() => {
    if (results.length > 0 && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, results.length]);

  useEffect(() => {
    if (results.length > 0 && enterPress) {
      navigate(results[cursor].url);
      setFocus(false);
    }
  }, [cursor, enterPress, results, navigate]);

  return (
    <Flex
      ref={ref}
      {...otherProps}
      sx={{
        borderRadius: "round",
        border: "1px solid",
        borderColor: "primary",
        backgroundColor: "surfaceDark",
        position: "relative",
        alignItems: "center",
      }}
    >
      <SearchInput
        onFocus={() => setFocus(true)}
        onChange={onChange}
        {...{ focus }}
      />
      <motion.div
        initial="hidden"
        variants={resultsVariant}
        animate={query.length > 0 && focus ? "visible" : "hidden"}
        sx={{
          position: ["fixed", "fixed", "absolute"],
          boxShadow: "high",
          zIndex: ["1000000", "1000000", null],
          left: "50%",
          transform: "translateX(-50%)",
          top: ["5rem", "5rem", "3.5rem"],
          width: ["90vw", "90vw", "100%"],
          mt: [4, 4, 0],
          minHeight: 4,
          borderRadius: "roundish",
          overflow: "hidden",
        }}
      >
        <Box
          aria-label="Search results for the entire site"
          as="section"
          sx={{
            display: "grid",
            backgroundColor: "surfaceDark",
          }}
        >
          {results.length === 0 && query.length > 0 && (
            <Text sx={{ p: 3, textAlign: "center", color: "muted" }}>
              {t("No_Results", null, {
                query: `${query.slice(0, 30)}${query.length > 30 ? "..." : ""}`,
              })}
            </Text>
          )}
          <ul
            ref={resultList}
            sx={{
              m: 0,
              listStyleType: "none",
              p: results.length === 0 && query.length > 0 ? 0 : 2,
              overflow: "auto",
              maxHeight: [
                "calc(80vh - 90px - 2rem)",
                "calc(80vh - 90px - 2rem)",
                "464px",
              ],
              "& > li": {
                borderRadius: "roundish",
                backgroundColor: "transparent",
                transition: "all .1s ease",
                cursor: "pointer",
                color: "muted",
              },
              "& > li > a": {
                p: 2,
                color: "muted",
                display: "block",
                borderRadius: "roundish",
                fontSize: [3, 5, 3],
              },
              "& li:hover > a, & li.active > a": {
                backgroundColor: "primaryMuted",
                color: "textMuted",
              },
            }}
          >
            {results.map((result, index) => (
              <li
                key={`search-hit-${index}`}
                className={index === cursor ? "active" : ""}
              >
                <SearchHit
                  {...result}
                  query={query}
                  onClick={() => {
                    setFocus(false);
                    onClick();
                    //Google Analytics Tracking
                    trackCustomEvent({
                      category: "Internal Search",
                      action: `Click Result`,
                      label: `Query: ${query} | To Page: ${result.url}`,
                    });
                  }}
                />
              </li>
            ))}
          </ul>
        </Box>
      </motion.div>
    </Flex>
  );
}
