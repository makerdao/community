import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { jsx, InitializeColorMode, ThemeProvider } from "theme-ui";

import { TranslationProvider } from "@modules/localization";

import { ThemeUIConfig } from "@modules/utility";
import Layout from "@modules/layouts/site_layout";
import { NavigationProvider } from "@modules/navigation";
import { getInitialLocale } from "@utils";

//Load our Primsjs css and Fonts
import "@modules/layouts/global.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

export const wrapRootElement = ({ element, props }) => (
  <TranslationProvider>
      {element}
  </TranslationProvider>
);

export const wrapPageElement = ({element, props}) => (
  <NavigationProvider>
    <Layout {...props}>
      {element}
    </Layout>
  </NavigationProvider>
)


export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
