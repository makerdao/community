// @flow

import { Link } from "@atoms";
import { Icon } from "@makerdao/dai-ui-icons";
/** @jsx jsx */
import { useTranslation } from "@modules/localization";
import { Fragment } from "react";
import { Flex, jsx } from "theme-ui";
import type { Node } from "react";

type TLink = {
  url: string,
  title: string,
};

type THeaderNavProps = {
  headerLinks: Array<TLink>,
  hideMenu: boolean,
};

export default function HeaderNav({
  headerLinks,
  hideMenu,
}: THeaderNavProps): Node {
  const { locale, t } = useTranslation();

  return (
    <Fragment>
      <Link
        to={`/${locale}/`}
        variant="nav"
        onClick={hideMenu}
        sx={{
          textDecoration: "none",
          color: "onBackgroundAlt",
          letterSpacing: "0.3px",
          width: "52px",
          height: "52px",
        }}
        aria-label={t("aria_MakerHomeIcon")}
      >
        <div>
          <Icon name="maker" color="primary" size={"52px"} />
        </div>
      </Link>
      <Flex
        sx={{
          display: ["none", "none", "flex"],
          flex: "auto",
          ml: [3, 3, "56px"],
          alignItems: "center",
          justifyContent: "center",
          "& > a": { fontSize: "16px", p: 2, textAlign: "center" },
          "& > a:not(:last-child)": { mr: "1.4vw" },
        }}
      >
        <Link
          to={`/${locale}/`}
          variant="nav"
          onClick={hideMenu}
          sx={{
            textDecoration: "none",
            fontWeight: "normal",
            letterSpacing: "0.3px",
            color: "onBackgroundAlt",
          }}
        >
          {t("Home")}
        </Link>
        {headerLinks.map(({ url, title }, index) => (
          <Link
            to={url}
            hideExternalIcon
            key={`header-link-${index}`}
            sx={{
              fontWeight: "normal",
              flexShrink: 0,
            }}
          >
            {title}
          </Link>
        ))}
        <Link
          to={"/blog"}
          sx={{
            fontWeight: "normal",
            flexShrink: 0,
          }}
        >
          {t("Blog")}
        </Link>
        <Link
          to={"https://forum.makerdao.com/"}
          hideExternalIcon
          sx={{
            fontWeight: "normal",
            flexShrink: 0,
          }}
        >
          {t("Forum")}
        </Link>
        <Link
          to={"https://chat.makerdao.com/"}
          hideExternalIcon
          sx={{
            fontWeight: "normal",
            flexShrink: 0,
          }}
        >
          {t("Chat")}
        </Link>
      </Flex>
    </Fragment>
  );
}
