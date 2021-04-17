//Load our Primsjs css and Fonts
import "@styles/global.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

import React from "react";
import { Layout } from "@layouts";
import { TranslationProvider } from "@modules/localization";
import { NavigationProvider } from "@modules/navigation";

export const wrapRootElement = ({ element }) => (
  <TranslationProvider>{element}</TranslationProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <NavigationProvider>
    <Layout {...props}>{element}</Layout>
  </NavigationProvider>
);
