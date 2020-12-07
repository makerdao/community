import React, { createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const { allDirectory } = useStaticQuery(graphql`
    query getDefaultLocale {
      allDirectory(
        filter: { absolutePath: { regex: "//content/([\\\\w{2}])[^/]$/" } }
      ) {
        nodes {
          absolutePath
        }
      }
    }
  `);

  const localeStrings = {};

  const allLocales = allDirectory.nodes.map((n) => {
    const loc = n.absolutePath.split("/").pop();

    // eslint-disable-next-line
    const uiData = require(`@content/${loc}/UI.json`);

    if (uiData) {
      localeStrings[loc] = { ...uiData };
    }

    return loc;
  });

  return (
    <TranslationContext.Provider
      value={{
        allLocales,
        localeStrings,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;
export { TranslationProvider };
