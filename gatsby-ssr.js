import React from "react";
import { jsx, InitializeColorMode } from "theme-ui";

import { TranslationProvider } from "@modules/localization";

import Layout from "@modules/layouts/site_layout";
import { NavigationProvider } from "@modules/navigation";

//Load our Primsjs css and Fonts
import "@modules/layouts/global.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

export const wrapRootElement = ({ element }) => (
  <TranslationProvider>{element}</TranslationProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <NavigationProvider>
    <Layout {...props}>{element}</Layout>
  </NavigationProvider>
);

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    jsx(InitializeColorMode, { key: "theme-ui-no-flash" }),
  ]);
};
