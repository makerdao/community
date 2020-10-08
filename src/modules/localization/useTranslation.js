import { useContext } from "react";
import { useLocation } from "@reach/router";

import { TranslationContext } from "./context";
import { DEFAULT_LOCALE } from "./index";

//NOTE(Rejon): This is a react hook I pulled inspiration from: https://w11i.me/how-to-build-multilingual-website-in-next-js
// 			   I've expanded to add some features like plurals, secondary level spaces (dubbed langspace), variables, and secondary locales.

//NOTE(Rejon): For the sake of security I've chosen NOT to support HTML parsing.

// It's possible to pass in an initialLangSpace when initializing the hook in your component.
// without ILS: useTranslation() -> t('error_code', 'errors')
// with ILS: useTranslation('errors') -> t('error_code')
export default function useTranslation(initialLangSpace) {
  const { allLocales, localeStrings } = useContext(TranslationContext);

  //NOTE(Rejon): We trust the path for locale. If it doesn't exist fallback to DEFAULT LOCALE
  const { pathname } = useLocation();
  const localeFromPath = pathname.replace(/\/+$/, "").split("/")[1];
  const locale =
    localeFromPath && allLocales.includes(localeFromPath)
      ? localeFromPath
      : DEFAULT_LOCALE;

  //key[String] - Key name of the text from the locale you want. Best practice is write it like you would english, replace all spaces with '_'
  //lang_space[String] - Language space keyname to access for your keys. ie. {'lang_space': {'key': 'Localized Text'}}
  //variables[Object] - Object of variables to insert into the string. Replaces {{value}} with variable value. ie. {value: 123} -> '123'
  //otherLocale[String] - In the case you want to display a string in another locale.
  function t(key, lang_space, variables, otherLocale) {
    let usingInitialLangSpace = false;
    //If an initialLangSpace is passed in when useTranslation is used then use it, but only if the call for this function doesn't include a lang_space.
    if (
      lang_space !== null &&
      lang_space !== undefined &&
      initialLangSpace !== null &&
      initialLangSpace !== undefined
    ) {
      lang_space = initialLangSpace;
      usingInitialLangSpace = true;
    }

    if (lang_space && !usingInitialLangSpace) {
      //Check if langspace is provided. For example: en:{home:{Hello user: "string"}}
      if (
        !localeStrings[locale][lang_space] ||
        !localeStrings[locale][lang_space][key]
      ) {
        console.warn(
          `Translation of '${key}' of language space '${lang_space}' for locale '${locale}' not found.`
        );
        return key;
      }
    } else if (usingInitialLangSpace) {
      //NOTE(Rejon): I do this because if we're using an intialLangSpace and it fails then it should default to No lang_space.
      if (
        !localeStrings[locale][lang_space] ||
        !localeStrings[locale][lang_space][key]
      ) {
        lang_space = null;
      }
    } else if (!localeStrings[locale][key] && !otherLocale) {
      //Check for common base key in locale. For example: en:{settings:"string"}
      if (typeof window !== "undefined") {
        console.warn(
          `Translation of '${key}' for locale '${locale}' not found.`
        );
      }
      return key;
    } else if (otherLocale && !localeStrings[otherLocale][key]) {
      //Check for common base key in locale. For example: en:{settings:"string"}
      if (typeof window !== "undefined") {
        console.warn(
          `Translation of '${key}' for  other locale '${otherLocale}' not found.`
        );
      }
      return key;
    }

    var pluralString = "";

    //Plurals check
    if (
      variables !== null &&
      variables !== undefined &&
      variables.count !== null &&
      variables.count !== undefined
    ) {
      //If strict is true, then "Mutli-Plurals" take priority.
      if (variables.strict === true) {
        switch (variables.count) {
          case 0: {
            //Zero
            pluralString = "_0";
            break;
          }

          case 1: {
            //Singular
            pluralString = "_1";
            break;
          }

          case 2: {
            //Two
            pluralString = "_2";
            break;
          }

          case 3: {
            // Few
            pluralString = "_3";
            break;
          }

          case 4: {
            //Many
            pluralString = "_4";
            break;
          }

          default: {
            //Other
            pluralString = "_5";
            break;
          }
        }
      } else {
        //Not strict, use general "_plural"/"_none"
        if (variables.count === 0) {
          pluralString = "_none";
        } else if (variables.count !== 1) {
          pluralString = "_plural";
        }
      }
    }

    //Add plural key if necessary.
    key += pluralString;

    let finalString = key ? localeStrings[locale][key] || "" : "";

    if (
      lang_space !== null &&
      lang_space !== undefined &&
      localeStrings[locale][lang_space] !== null &&
      localeStrings[locale][lang_space] !== undefined
    ) {
      finalString = key
        ? localeStrings[locale][lang_space][key] ||
          localeStrings[locale][key] ||
          ""
        : "";
    }

    //Querying otherLocale and otherLocale exists in app locales.
    if (
      otherLocale &&
      localeStrings[otherLocale] !== null &&
      localeStrings[otherLocale] !== undefined
    ) {
      if (
        localeStrings[otherLocale][lang_space] !== null &&
        localeStrings[otherLocale][lang_space] !== undefined
      ) {
        finalString = key
          ? localeStrings[otherLocale][lang_space][key] || ""
          : "";
      } else {
        finalString = key ? localeStrings[otherLocale][key] || "" : "";
      }
    }

    //Variable Replacement
    if (variables && typeof variables === "object") {
      Object.keys(variables).forEach((key) => {
        let variableToReplace = `{{${key}}}`;

        if (finalString.indexOf(variableToReplace) !== -1) {
          //Replace other variables.
          finalString = finalString.replace(variableToReplace, variables[key]);
        }
      });
    }

    return finalString;
  }

  return {
    t,
    locale,
    allLocales,
    DEFAULT_LOCALE,
  };
}
