import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "@reach/router";
import { useTranslation } from "@modules/localization";
import { getInitialLocale } from "@utils";

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
