/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Icon } from "@makerdao/dai-ui-icons";

import { useTranslation } from "@modules/localization";
import { useNavigation } from "@modules/navigation/context";
import { getLinkIcon, Link } from "@modules/navigation";

const Footer = () => {
  const { locale, DEFAULT_LOCALE, t } = useTranslation();
  const { footerFiles, socialLinks } = useNavigation();

  const footerConfigLinks =
    DEFAULT_LOCALE !== locale
      ? footerFiles.nodes.find((n) =>
          n.fileAbsolutePath.includes(`/${locale}/`)
        )
      : [];

  //Default locale fallback
  const defaultLocaleFooterLinks = footerFiles.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${DEFAULT_LOCALE}/`)
  );

  const footerLinks =
    footerConfigLinks && footerConfigLinks.length !== 0
      ? footerConfigLinks.body
      : defaultLocaleFooterLinks
      ? defaultLocaleFooterLinks.body
      : null;

  const socialConfigLinks =
    DEFAULT_LOCALE !== locale
      ? socialLinks.nodes.find((n) =>
          n.fileAbsolutePath.includes(`/${locale}/`)
        )
      : [];

  const defaultSocialConfigLinks = socialLinks.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${DEFAULT_LOCALE}/`)
  );

  const _socialLinks =
    socialConfigLinks && socialConfigLinks.length !== 0
      ? socialConfigLinks.internal.content.trim().split("\n")
      : defaultSocialConfigLinks
      ? defaultSocialConfigLinks.internal.content.trim().split("\n")
      : null;


  return (
    <Box
      as="footer"
      sx={{
        width: "100%",
        bg: "backgroundAlt",
      }}
    >
      <Flex
        sx={{
          px: ["26px", "26px", "52px"],
          pt: ["40px", "40px", "54px"],
          pb: ["119px", "119px", "54px"],
          flexDirection: ["column", "column", "unset"],
          maxWidth: "1364px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            color: "onBackgroundAlt",
            display: "inline-block",
            width: "217px",
            "& > *, & svg": { color: "onBackgroundAlt" },
          }}
        >
          <Link
            to="/"
            sx={{
              display: "inline-block",
              mb: "31px",
            }}
            aria-label={t("aria_MakerFooterLogo")}
          >
            <Icon
              name="makerLogo"
              sx={{ width: "217px", height: "30px", display: "block" }}
            />
          </Link>
          <Box sx={{ "& > *:not(:last-of-type)": { mr: "18px" }, '& > a': {mr: 0} }}>
            {_socialLinks.map((s, index) => {
              const link = s.match(/\(([^)]+)\)/)[1];

              return link
                ? getLinkIcon(link, `footer-social-link-${index}`)
                : null;
            })}
            {/* <a href="javascript:gaOptout();">Deactivate Google Analytics</a> */}
          </Box>
        </Box>
        <Box
          sx={{
            ml: ["unset", "unset", "5vw"],
            mt: ["56px", "56px", "unset"],
            display: "inline-block",
            width: ["100%", "100%", "calc(100% - 106px - 217px)"],
            verticalAlign: "top",
            "& > * > ul": {
              m: 0,
              p: 0,
              color: "text",
              listStyleType: "none",

              display: "flex",
              flexWrap: ["wrap", "wrap", "unset"],
              "& > li:not(:last-of-type)": {
                mr: ["unset", "unset", "5vw"],
              },
              "& > li": {
                fontWeight: "500",
                fontSize: "1rem",
                flexShrink: 0,
                flex: ["0 50%", "0 50%", 1],
                width: ["calc(50% - 66px)", "calc(50% - 66px)", "unset"],
                pr: ["66px", "66px", "unset"],
                mb: ["64px", "64px", "unset"],
                color: "onBackgroundAlt",
                "& > *:nth-of-type(1):not(ul)": {
                  mb: "8px",
                },
                "& > ul": {
                  fontSize: "1rem",
                  p: 0,
                  listStyleType: "none",
                  "& li:not(:last-of-type)": {
                    mb: "10px",
                  },
                  "& a": {
                    color: "onBackgroundAlt",
                    fontWeight: "normal",
                    textDecoration: "none",
                    "& svg": {
                      display: "none",
                    },
                    "&:hover": {
                      textDecoration: "none",
                    },
                  },
                },
              },
            },
          }}
        >
          {footerLinks && (
            <Box sx={{ flex: 1 }}>
              <MDXRenderer>{footerLinks}</MDXRenderer>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
