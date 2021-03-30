import React, { useEffect } from "react";
import { useTranslation } from "@modules/localization";
import { useNavigate } from "@reach/router";
import { getInitialLocale } from "@utils";
import { Helmet } from "react-helmet";

//This page doesn't exist and solely acts as a reroute for language.
const IndexPage = () => {
  const navigate = useNavigate();
  const { allLocales, DEFAULT_LOCALE } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined" && window) {
      let initialLocale = getInitialLocale(allLocales, DEFAULT_LOCALE);

      //Replace current route with locale based index.
      navigate(`/${initialLocale}/`, { replace: true });
    }
  });

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
};

export default IndexPage;
