/** @jsx jsx */
import { Fragment, useEffect, useRef } from "react";
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "@modules/navigation";
import { useNavigation } from "@modules/navigation/context";
import { useTranslation } from "@modules/localization";
import Search from "@modules/search";
import theme from "@src/gatsby-plugin-theme-ui/";

var lastScroll = 0; //<- Last scroll top of window. Defined outside because we don't want to re-render for scrolling.
var delta = 5; //<- Rate of change in scroll needed to hide the header.
var isShowingMenu = false; //<- For document  event listeners to know if the menu is being shown or not.

const ColorModeToggles = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Fragment>
      <div
        sx={{
          display: ["none", "none", "inline-block"],
          height: "32px",
          width: "32px",
          mr: "21px",
        }}
      >
        <Icon
          size={"32px"}
          name={"sun"}
          sx={{
            borderRadius: "100%",
            p: "2px",
            bg: colorMode !== "default" ? "transparent" : "primary",
            color: colorMode !== "default" ? "onBackgroundAlt" : "text",

            minWidth: "32px",
            minHeight: "32px",
            cursor: "pointer",
            "&:hover": {
              bg: colorMode !== "default" ? "background" : "",
            },
          }}
          onClick={() => {
            if (colorMode !== "default") {
              setColorMode("default");
            }
          }}
        />
      </div>

      <div
        sx={{
          display: ["none", "none", "inline-block"],
          height: "32px",
          width: "32px",
        }}
      >
        <Icon
          size={"32px"}
          name={"moon"}
          sx={{
            borderRadius: "100%",
            p: "2px",
            bg: colorMode !== "dark" ? "transparent" : "primary",
            color: colorMode !== "dark" ? "onBackgroundAlt" : "background",
            minWidth: "32px",
            minHeight: "32px",
            cursor: "pointer",
            "&:hover": {
              bg: colorMode !== "dark" ? "surfaceDark" : "",
            },
          }}
          onClick={() => {
            if (colorMode !== "dark") {
              setColorMode("dark");
            }
          }}
        />
      </div>
    </Fragment>
  );
};

const HeaderNav = ({ headerLinks, hideMenu }) => {
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
};

const Header = () => {
  const headerContainer = useRef(null);
  const {
    headerLinks,
    mobileNavOpen,
    showMobileMenu,
    hideMobileMenu,
  } = useNavigation();

  const breakpoints = theme.breakpoints.slice(0, -1); //NOTE(Rejon): The last element of the break point array SHOULD be infinity.

  const onMenuClick = () => {
    if (mobileNavOpen) {
      hideMobileMenu(lastScroll);
    } else {
      showMobileMenu();
    }

    isShowingMenu = !mobileNavOpen;
  };

  const hideMenu = () => {
    if (mobileNavOpen) {
      isShowingMenu = false;
      hideMobileMenu();
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (headerContainer.current && !mobileNavOpen) {
        const inMobileRange = breakpoints.some(
          (n) => window.innerWidth <= parseInt(n)
        );

        if (inMobileRange) {
          const headerHeight = headerContainer.current.offsetHeight;
          const currentScroll = window.scrollY;

          //Scroll must be more than the delta.
          if (Math.abs(lastScroll - currentScroll) <= delta) return;

          //If you scroll down AND our scroll top is greater than our header,
          //hide it.
          if (currentScroll > lastScroll && currentScroll > headerHeight) {
            headerContainer.current.classList.add("hide-nav");
          } else {
            //We've scrolled up OR our scrollTop is less than the header.
            headerContainer.current.classList.remove("hide-nav");
          }

          lastScroll = currentScroll;
        } else {
          //Render the header as normal without the "show/hide logic"
          headerContainer.current.classList.remove("hide-nav");
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [breakpoints, mobileNavOpen]);

  return (
    <Box
      as="header"
      ref={headerContainer}
      sx={{
        bg: "backgroundAlt",
        position: ["fixed", "fixed", "relative"],
        width: "100%",
        zIndex: "1000",
        transition: "all .32s ease-in-out",
        transform: "translateY(0px)",
        top: 0,
        "&.hide-nav": {
          transform: "translateY(-190px)",
        },
      }}
    >
      <Flex
        sx={{
          maxWidth: "1364px",
          height: ["90px", "90px", "unset"],
          zIndex: 2,
          position: "relative",
          margin: "auto",
          px: [3, "30px", "22px"],
          py: "19px",
          alignItems: "center",
          "& a": { color: "onBackgroundAlt", textDecoration: "none" },
          "& a.external-link > svg": { display: "none" },
          "& a:hover": {
            textDecoration: "none",
          },
        }}
      >
        <HeaderNav headerLinks={headerLinks} hideMenu={hideMenu} />
        <Flex
          sx={{
            width: ["100%", "100%", "auto"],
            ml: [3, 3, "3rem"],
            alignItems: "center",
            letterSpacing: "0.3px",
            color: "onBackgroundAlt",
            flexDirection: "row",
          }}
        >
          <Search
            collapse
            onClick={hideMenu}
            sx={{
              width: "100%",
              minWidth: ["unset", "270px", "270px"],
              mr: ["unset", "unset", "1vw"],

              fontFamily: "body",
              letterSpacing: "0.3px",
              display: "inline-block",
              fontSize: "15px",
            }}
          />

          <ColorModeToggles />
        </Flex>
        <Icon
          size={"39px"}
          onClick={onMenuClick}
          name={mobileNavOpen ? "close" : "menu"}
          sx={{
            p: mobileNavOpen ? "7px" : "0px", //NOTE(Rejon): Close and Menu have different viewbox sizes in the dai-ui spec.
            color: "onBackgroundAlt",
            cursor: "pointer",
            ml: "1rem",
            display: ["initial", "initial", "none"],
          }}
        />
      </Flex>
      <Box
        className={mobileNavOpen ? "visible" : ""}
        sx={{
          display: ["initial", "initial", "none"],
          "&::after": {
            content: `""`,
            height: "1px",
            width: "100%",
            bg: "surfaceDark",
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transformOrigin: "center",
            transform: "scaleX(0)",
            transition: "all .1s cubic-bezier(0.65, 0, 0.35, 1)",
          },
          "&.visible::after": {
            opacity: 1,
            transform: "scaleX(1)",
            transition: "all .5s cubic-bezier(0.65, 0, 0.35, 1)",
          },
        }}
      ></Box>
    </Box>
  );
};

export default Header;
