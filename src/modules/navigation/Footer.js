/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Icon } from "@makerdao/dai-ui-icons";

import { useTranslation } from "@modules/localization";
import { useNavigation } from "@modules/navigation/context";
import { getLinkIcon, Link } from "@modules/navigation";

const Footer = () => {
  const { locale, DEFAULT_LOCALE, t } = useTranslation('Footer');
  const { socialLinks } = useNavigation();

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
        bg: "backgroundAlt",
      }}
    >
      <Flex
        className="footer-content"
        sx={{
          px: ["26px", "26px", "52px"],
          pt: ["40px", "40px", "54px"],
          pb: ["119px", "119px", "54px"],
          flexDirection: ["column", "column", "unset"],
          maxWidth: "1364px",
          margin: "auto",
        }}
      >
        
        <div
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
            <div sx={{ flex: 1 }}>
              <ul>
                <li>
                  <p>
                    {t('Resources')}
                  </p>

                  <ul>
                    <li>
                      <Link to={'https://makerdao.com/en/whitepaper'}>
                        {t('Whitepaper')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://awesome.makerdao.com/#faqs'}>
                        {t('FAQs')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/en/privacy'}>
                        {t('Privacy_Policy')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://www.notion.so/makerdao/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4'}>
                        {t('Brand_Assets')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/en/feeds'}>
                        {t('Feeds')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.statuspage.io/'}>
                        {t('Service_Status')}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    {t('Products')}
                  </p>

                  <ul>
                    <li>
                      <Link to={'https://oasis.app/'}>
                        {t('Oasis')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://migrate.makerdao.com/'}>
                        {t('Migrate')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/en/ecosystem'}>
                        {t('Ecosystem')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/en/governance'}>
                        {t('Governance')}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    {t('Developers')}
                  </p>

                  <ul>
                    <li>
                      <Link to={'https://docs.makerdao.com/'}>
                        {t('Documentation')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://docs.makerdao.com/dai.js'}>
                        {t('Dai_js')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://github.com/makerdao/developerguides'}>
                        {t('Developer_Guides')}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    {t('Foundation')}
                  </p>
                  <ul>
                    <li>
                      <Link to={'https://makerdao.com/team/'}>
                        {t('Team')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/careers'}>
                        {t('Careers')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://makerdao.com/en/contact'}>
                        {t('Contact')}
                      </Link>
                    </li>
                    <li>
                      <Link to={'https://blog.makerdao.com/'}>
                        {t('Blog')}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
