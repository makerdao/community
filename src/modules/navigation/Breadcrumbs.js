/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Text, Flex } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization/";
import { titleCase } from "@utils";

const Breadcrumbs = ({ data, pathDirs }) => {
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  return (
    <Flex
      sx={{
        alignItems: "center",
        width: "100%",
        mb: "28px",
        flexWrap: "wrap",
        fontSize: 3,
        pr: [0, 0, "1.5rem"],
      }}
    >
      <Link
        to={`/${locale}/`}
        sx={{
          textDecoration: "none",
          color: "textMuted",
          fontWeight: "normal",
          "&:hover": {
            textDecoration: "none",
          },
        }}
        partiallyActive={false}
      >
        {t("Home")}
      </Link>
      <Icon
        name="chevron_right"
        size={3}
        sx={{ mx: ["10px", "10px", "13px"] }}
      />
      {pathDirs.map((p, index) => {
        const _data = data.find((n) => n.part === p);

        if (!_data) {
          if (index === pathDirs.length - 1) {
            return (
              <Text
                sx={{
                  display: "inline-block",
                  fontWeight: "500",
                  color: "textMuted",
                }}
                key={`breadcrumb-${index}`}
              >
                {titleCase(p.replace(/-|_|\./g, " "))}
              </Text>
            );
          }

          return (
            <Fragment key={`breadcrumb-${index}`}>
              <Text
                sx={{
                  display: "inline-block",
                  color: "textMuted",
                }}
                key={`breadcrumb-${index}`}
              >
                {titleCase(p.replace(/-|_|\./g, " "))}
              </Text>
              <Icon name="chevron_right" size={3} sx={{ mx: "13px" }} />
            </Fragment>
          );
        }

        const { title, url } = _data;

        //Render "Title (LOCALE)" if the breadcrumb is a fallback route to EN.
        //NOTE(Rejon): This is a super rare case where in-between files of a director don't
        //             overlap properly between the current locale and default locale.
        const isFallback =
          url.includes(`/${DEFAULT_LOCALE}/`) && DEFAULT_LOCALE !== locale;
        const fallbackString = isFallback
          ? ` (${t("Language", null, null, DEFAULT_LOCALE)})`
          : "";

        //If this is the last crumb, then just render its name.
        if (index === pathDirs.length - 1) {
          return (
            <Text
              sx={{
                display: "inline-block",
                fontWeight: "500",
                color: "textMuted",
              }}
              key={`breadcrumb-${index}`}
            >
              {`${title}${fallbackString}`}
            </Text>
          );
        }

        return (
          <Fragment key={`breadcrumb-${index}`}>
            {url ? (
              <Link
                to={url}
                sx={{
                  textDecoration: "none",
                  color: "textMuted",
                  fontWeight: "normal",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  lineHeight: "normal",
                }}
                partiallyActive={false}
                activeClassName="breadcrumb-no-active"
              >
                {index >= 2 ? (
                  <Fragment>{`...${fallbackString}`}</Fragment>
                ) : (
                  <Fragment>
                    <span
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "250px",
                      }}
                    >
                      {title}
                    </span>
                    {fallbackString}
                  </Fragment>
                )}
              </Link>
            ) : (
              <Fragment>
                {index >= 2 ? (
                  <Fragment>{`...${fallbackString}`}</Fragment>
                ) : (
                  `${title}${fallbackString}`
                )}
              </Fragment>
            )}
            <Icon name="chevron_right" size={3} sx={{ mx: "13px" }} />
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default Breadcrumbs;
