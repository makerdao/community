/** @jsx jsx */
import { useState } from "react";
import { Box, Flex, Text, jsx, useColorMode } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useLocation } from "@reach/router";
import { motion, AnimatePresence } from "framer-motion";

import { Link, SidenavNode } from "@modules/navigation";
import { useTranslation } from "@modules/localization";
import { useNavigation } from "@modules/navigation/context";

const MobileNav = ({ sidenavData }) => {
  const { headerLinks, mobileNavOpen, hideMobileMenu } = useNavigation();
  const { locale, t } = useTranslation();
  const { pathname } = useLocation();

  //If there's sidenav data we're on a page with a topSection
  //If the sidenav data's top section matches our current url path section
  //AND if the sidenav for this top section has items render inside the submenu.
  //Else render the main menu
  const renderSubmenuInitial =
    sidenavData.items[0] !== undefined &&
    sidenavData.items[0].slugPart === pathname.split("/")[2] &&
    sidenavData.items[0].items.length > 0;

  const [showMainMenu, setShowMainMenu] = useState(
    renderSubmenuInitial === false
  );

  const [colorMode, setColorMode] = useColorMode();

  if (!mobileNavOpen) {
    return null;
  }

  return (
    <Box
      sx={{
        height: "calc(100vh - 90px)",
        zIndex: 100,
        position: "fixed",
        top: "90px",
        display: ["block", "block", "none"],
        width: "100%",
      }}
    >
      <div
        className={mobileNavOpen ? "open" : ""}
        sx={{
          bg: "backgroundAlt",
          right: "-2500px",
          top: "-2500px",
          position: "absolute",
          width: "5000px",
          opacity: 0,
          height: "5000px",
          borderRadius: "10000px",
          zIndex: 0,
          transition: "all .25s ease",
          transformOrigin: "center",
          "&.open": {
            opacity: 1,
          },
        }}
      ></div>
      <AnimatePresence exitBeforeEnter>
        {showMainMenu && (
          <motion.div
            key="main-menu"
            initial={{
              opacity: 0,
              x: "32px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            animate={{
              opacity: 1,
              x: "0px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              x: "32px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            sx={{ pb: "30px", pt: "30px" }}
          >
            <Flex
              sx={{
                flexDirection: "column",
                fontSize: ["5vw", "5vw", null],
                mb: "33px",
              }}
            >
              <Link
                to={`/${locale}/`}
                variant="nav"
                onClick={hideMobileMenu}
                sx={{
                  textDecoration: "none",
                  color: "onBackgroundAlt",
                  py: "2vh",
                  fontWeight: "normal",
                  px: [3, "30px", null],
                }}
              >
                <Text>{t("Home")}</Text>
              </Link>
              {headerLinks.map(({ url, title }, index) => {
                //If we rendered the submenu initially AND we're still in the top section
                //we need to render a box that will act as a button instead of a Link.
                //That way when we click it, it opens the menu instead of going to the
                //destination.
                if (
                  renderSubmenuInitial &&
                  sidenavData.items[0] !== undefined
                ) {
                  let urlDirs = url.replace(/\/+$/, "").split("/");
                  urlDirs = urlDirs.slice(2, urlDirs.length);

                  if (urlDirs[0] === sidenavData.items[0].slugPart) {
                    return (
                      <Box
                        sx={{
                          py: "2vh",
                          px: [3, "30px", null],
                          textDecoration: "none",
                          color: "onBackgroundAlt",
                          position: "relative",
                          fontWeight: "500",
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "none",
                            color: "primary",
                          },
                        }}
                        onClick={() => setShowMainMenu(false)}
                        key={`mobile-nav-header-link-${index}`}
                      >
                        {title}
                        <Icon
                          name={
                            /^\/(?!\/)/.test(url) ? "chevron_right" : "increase"
                          }
                          size={"3.9vw"}
                          sx={{
                            position: "absolute",
                            right: 4,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        />
                      </Box>
                    );
                  }
                }

                return (
                  <Link
                    to={url}
                    sx={{
                      py: "2vh",
                      textDecoration: "none",
                      color: "onBackgroundAlt",
                      position: "relative",
                      fontWeight: "normal",
                      px: [3, "30px", null],
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                    onClick={hideMobileMenu}
                    key={`mobile-nav-header-link-${index}`}
                    hideExternalIcon
                  >
                    {title}
                    <Icon
                      name={
                        /^\/(?!\/)/.test(url) ? "chevron_right" : "increase"
                      }
                      size={"3.9vw"}
                      sx={{
                        position: "absolute",
                        right: 4,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </Link>
                );
              })}
            </Flex>

            <Flex
              sx={{
                flexDirection: "row",
                px: [3, "30px", null],
              }}
            >
              <motion.div
                key="subnav"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                sx={{
                  backfaceVisibility: "hidden",
                }}
              >
                <Icon
                  size={"9vw"}
                  name={"sun"}
                  sx={{
                    borderRadius: "100%",
                    p: "2px",
                    bg: colorMode !== "default" ? "transparent" : "primary",
                    color: colorMode !== "default" ? "onBackgroundAlt" : "text",
                    mr: "30px",
                    minWidth: "32px",
                    minHeight: "32px",
                    maxWidth: "60px",
                    maxHeight: "60px",
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
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                sx={{
                  backfaceVisibility: "hidden",
                }}
              >
                <Icon
                  size={"9vw"}
                  name={"moon"}
                  sx={{
                    borderRadius: "100%",
                    p: "2px",
                    bg: colorMode !== "dark" ? "transparent" : "primary",
                    color:
                      colorMode !== "dark" ? "onBackgroundAlt" : "background",
                    minWidth: "32px",
                    minHeight: "32px",
                    maxWidth: "60px",
                    maxHeight: "60px",
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
              </motion.div>
            </Flex>
          </motion.div>
        )}

        {!showMainMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: "32px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            animate={{
              opacity: 1,
              x: "0px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              x: "64px",
              transition: { ease: "easeOut", duration: 0.2 },
            }}
          >
            <Flex
              sx={{
                color: "primary",
                px: [3, "30px", null],
                pt: "30px",
                pb: "37px",
                borderBottom: "1px solid",
                borderColor: "surfaceDark",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setShowMainMenu(true)}
            >
              <Icon size={"3.3vw"} name="chevron_left" />
              <Text
                variant="caps"
                sx={{
                  color: "primary",
                  fontSize: ["14px", "3vw", null],
                  display: "inline-block",
                  lineHeight: "normal",
                  ml: 2,
                }}
              >
                {t("Back_To_Main_Menu")}
              </Text>
            </Flex>
            {sidenavData && sidenavData.items[0] && (
              <Box sx={{ overflow: "auto", maxHeight: "80vh", pb: "10vh" }}>
                {sidenavData.items[0].slugPart && (
                  <Link
                    onClick={hideMobileMenu}
                    sx={{
                      pb: "2vh",
                      fontSize: ["5vw", "5vw", null],
                      textDecoration: "none",
                      px: [3, "30px", null],
                      color: "primary",
                      display: "block",
                      mb: 3,
                      pt: "calc(2vh + 6px)",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                    to={`/${locale}/${sidenavData.items[0].slugPart}/`}
                  >
                    {sidenavData.items[0].title}
                  </Link>
                )}

                <ul
                  sx={{
                    m: 0,
                    p: 0,
                    pb: "5rem",
                    listStyleType: "none",
                    "& li > a": {
                      color: "onBackgroundAlt",
                      py: "2vh",
                      fontSize: ["5vw", "5vw", null],
                      textDecoration: "none",
                      position: "relative",
                      px: "30px",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    },
                    "& li > svg": {
                      width: "54px",
                      height: "54px",
                      color: "onBackgroundAlt",
                      padding: "18px",
                      right: "4%",
                    },
                  }}
                >
                  {sidenavData.items[0].items.map((item, index) => (
                    <SidenavNode
                      key={`${item.url}-${index}`}
                      currentPath={pathname}
                      onClick={hideMobileMenu}
                      {...item}
                    />
                  ))}
                </ul>
              </Box>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MobileNav;
