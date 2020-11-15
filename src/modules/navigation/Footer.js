/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import Link from "@modules/navigation/Link";

import { useTranslation } from "@modules/localization";
import { getLinkIcon } from "@modules/navigation";

const socialLinks = {
  "Twitter": "https://twitter.com/MakerDAO",
  "Reddit": "https://www.reddit.com/r/MakerDAO/",
  "Telegram": "https://t.me/makerdaoOfficial",
  "Chat": "https://chat.makerdao.com/",
  "Youtube": "https://www.youtube.com/MakerDAO"
}

const Footer = () => {
  const { t } = useTranslation();

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
          <Box
            sx={{
              "& > *:not(:last-of-type)": { mr: "18px" },
              "& > a": { mr: 0 },
            }}
          >
            {Object.keys(socialLinks).map((s, index) => getLinkIcon(socialLinks[s], `footer-social-link-${index}`))}
          </Box>
        </Box>
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
                flexShrink: 0,
                flex: ["0 50%", "0 50%", 1],
                width: ["calc(50% - 66px)", "calc(50% - 66px)", "unset"],
                pr: ["66px", "66px", "unset"],
                mb: ["64px", "64px", "unset"],
                color: "onBackgroundAlt",
                "& > ul": {
                  p: 0,
                  mt: 3,
                  listStyleType: "none",
                  "& li a": {
                    color: "onBackgroundAlt",
                    fontWeight: "normal",
                  },
                  "& li:not(:last-of-type)": {
                    mb: "10px",
                  },
                },
              },
            },
          }}
        >
          <div sx={{ flex: 1 }}>
            <ul>
              <li>
                <span sx={{ mt: 0 }}>{t("Resources", "Footer")}</span>

                <ul>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.com/en/whitepaper"}
                    >
                      {t("Whitepaper", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://awesome.makerdao.com/#faqs"}
                    >
                      {t("FAQs", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.com/en/privacy"}
                    >
                      {t("Privacy_Policy", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={
                        "https://www.notion.so/makerdao/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4"
                      }
                    >
                      {t("Brand_Assets", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"https://makerdao.com/en/feeds"}>
                      {t("Feeds", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.statuspage.io/"}
                    >
                      {t("Service_Status", "Footer")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("Products", "Footer")}</span>

                <ul>
                  <li>
                    <Link hideExternalIcon to={"https://oasis.app/"}>
                      {t("Oasis", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"https://migrate.makerdao.com/"}>
                      {t("Migrate", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.com/en/ecosystem"}
                    >
                      {t("Ecosystem", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.com/en/governance"}
                    >
                      {t("Governance", "Footer")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("Developers", "Footer")}</span>

                <ul>
                  <li>
                    <Link hideExternalIcon to={"https://docs.makerdao.com/"}>
                      {t("Documentation", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://docs.makerdao.com/dai.js"}
                    >
                      {t("Daijs", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://github.com/makerdao/developerguides"}
                    >
                      {t("Developer_Guides", "Footer")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("Foundation", "Footer")}</span>
                <ul>
                  <li>
                    <Link hideExternalIcon to={"https://makerdao.com/team/"}>
                      {t("Team", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"https://makerdao.com/careers"}>
                      {t("Careers", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://makerdao.com/en/contact"}
                    >
                      {t("Contact", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"https://blog.makerdao.com/"}>
                      {t("Blog", "Footer")}
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
