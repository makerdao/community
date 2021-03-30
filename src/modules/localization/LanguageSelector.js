import { useTranslation } from "@modules/localization";
import { Link } from "@modules/navigation";
import { Select } from "@modules/ui";
import { useNavigate } from "@reach/router";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
/** @jsx jsx */
import { Fragment } from "react";
import { Box, jsx, Text, useThemeUI } from "theme-ui";

const LanguageSelector = ({ data, pagePath }) => {
  const { theme } = useThemeUI();
  const navigate = useNavigate();
  const { locale, t, allLocales } = useTranslation();

  const onChange = ({ value, label }) => {
    //Update local storage on switch
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", value.split("/")[1]);
    }

    //Google Analytics Tracking
    trackCustomEvent({
      category: "Language Selector",
      action: `Switch Page to ${label}`,
      label: `From Page: ${pagePath} (${locale}) |  To Page: ${value} (${
        value.split("/")[1]
      })`,
    });

    navigate(value);
  };




  //If we have existing languages or we're swapping, show the select.
  if (data.length > 0) {
    return (
      <Box
        sx={{
          width: ["100%", "100%", "205px"],
          mb: [3, 3, "unset"],
          position: "relative",
          top: 0,
          right: 0,
        }}
      >
        <Select
          isSearchable={false}
          options={data}
          onChange={onChange}
          aria-label={t("Page_Language_Selector")}
          value={{
            value: pagePath,
            label: t("Language"),
          }}
        />
        <Box sx={{ mt: 2, textAlign: ["left", "left", "right"] }}>
          <Text
            sx={{
              lineHeight: "normal",
              display: ["inline-block", "inline-block", "unset"],
            }}
          >
            {`${t("Need_Another_Language")}  `}
            <Link
              to="/contribute/translations"
              sx={{
                color: "link",
                textDecoration: "none",
                fontWeight: "500",
                mt: 1,
                lineHeight: "normal",
                display: ["inline-block", "inline-block", "block"],
              }}
            >
              {t("Join_translation_team")}
            </Link>
          </Text>
        </Box>
      </Box>
    );
  }
  const availableLanguages = allLocales.filter((loc) => loc !== locale);

  return (
    <Box
      sx={{
        p: [0, 0, 3],
        width: ["100%", "100%", "234px"],
        border: ["unset", "unset", "1px solid"],
        borderColor: "text",
        borderRadius: "12px",
        bg: "background",
        mb: 2,
        mt: ["unset", "unset", "64px"],
        position: "relative",
        right: 0,
        top: 0,
      }}
    >
      <Select
        isSearchable={false}
        theme={(selectTheme) => ({
          ...selectTheme,
          fontFamily: theme.fonts.body,
          colors: { ...selectTheme.colors, ...uiSelectTheme },
        })}
        isDisabled={true}
        sx={{ display: ["block", "block", "none"], width: "100%", mb: 2 }}
        components={{
          Menu,
          MenuList,
          IndicatorsContainer,
          ValueContainer,
          Control,
          Option,
        }}
        options={data}
        onChange={onChange}
        aria-label={t("Page_Language_Selector")}
        value={{
          value: pagePath,
          label: t("Language"),
        }}
      />
      <Text
        sx={{
          display: ["inline-block", "inline-block", "block"],
          mr: [2, 2, "unset"],
        }}
      >
        {t("Available_Languages", null, { count: availableLanguages.length })}
      </Text>

      <Text
        sx={{
          mb: [1, 1, 2],
          letterSpacing: ".7rem",
          display: ["inline-block", "inline-block", "block"],
        }}
      >
        {availableLanguages.length > 0 && (
          <Fragment>
            {availableLanguages.map((loc) => t("Flag", null, null, loc))}
          </Fragment>
        )}
      </Text>

      <Box>
        <Text
          sx={{
            lineHeight: "normal",
            display: ["inline-block", "inline-block", "unset"],
          }}
        >
          {`${t("Need_Another_Language")}  `}
          <Link
            to="/contribute/translations"
            sx={{
              color: "link",
              textDecoration: "none",
              fontWeight: "500",
              mt: 1,
              lineHeight: "normal",
              display: ["inline-block", "inline-block", "block"],
            }}
          >
            {t("Join_translation_team")}
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
