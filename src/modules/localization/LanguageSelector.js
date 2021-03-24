/** @jsx jsx */
import { Fragment } from "react";
import Select, { components } from "react-select";
import { useNavigate } from "@reach/router";
import { Box, jsx, Text, useThemeUI } from "theme-ui";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization";

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

  const Menu = (props) => (
    <components.Menu
      {...props}
      sx={{
        marginTop: 0,
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "muted",
        overflow: "hidden",
      }}
    />
  );

  const MenuList = (props) => (
    <components.MenuList {...props} sx={{ py: 0, borderRadius: "12px" }} />
  );

  const Option = (props) => (
    <components.Option
      {...props}
      sx={{ px: "18px", cursor: "pointer", fontSize: ["18px", "18px", 3] }}
    />
  );

  const IndicatorsContainer = (props) => (
    <Box
      sx={{
        width: "auto",
        pr: 2,
        "& > * >span": {
          display: "none",
        },
        "& svg, &:hover svg": {
          color: props.isDisabled ? "muted" : "backgroundAlt",
        },
      }}
    >
      <components.IndicatorsContainer {...props} />
    </Box>
  );

  const ValueContainer = (props) => (
    <components.ValueContainer
      sx={{
        fontFamily: "body",
        color: "textMuted",
        pl: 3,
      }}
      {...props}
    />
  );

  const Control = (props) => (
    <components.Control
      sx={{
        border: "1px solid",
        borderColor: "muted",
        borderRadius: "12px",
        fontSize: ["18px", "18px", 3],
        pr: 0,
        p: ["2px", "2px", 0],
      }}
      {...props}
    />
  );

  //Override select component theme with our theme since it's not connected to theme-ui
  const uiSelectTheme = {
    primary: theme.colors.primary,
    primary75: theme.colors.success,
    primary50: theme.colors.primaryMuted,
    primary25: theme.colors.successAlt,
    danger: theme.colors.bear,
    dangerLight: theme.colors.bearAlt,
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
          theme={(selectTheme) => ({
            ...selectTheme,
            fontFamily: theme.fonts.body,
            colors: { ...selectTheme.colors, ...uiSelectTheme },
          })}
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
