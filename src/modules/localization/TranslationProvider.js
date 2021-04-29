// @flow

import React, { createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import type { Node } from 'react';

export const TranslationContext: any = createContext();
type TranslationProviderProps = {
  children: Node,
};

export default function TranslationProvider({
  children,
}: TranslationProviderProps): Node {
  const { allDirectory } = useStaticQuery<TGatsbyTypes_getDefaultLocaleQuery>(
    GetDefaultLocaleQuery
  );

  const localeStrings = {};

  const allLocales = allDirectory.nodes.map((n) => {
    const loc = n.absolutePath.split('/').pop();

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
}

const GetDefaultLocaleQuery = graphql`
  query getDefaultLocale {
    allDirectory(
      filter: { absolutePath: { regex: "//content/([\\\\w{2}])[^/]$/" } }
    ) {
      nodes {
        absolutePath
      }
    }
  }
`;
