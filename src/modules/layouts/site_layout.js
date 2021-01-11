/** @jsx jsx */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Flex, Text, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { motion } from "framer-motion";

import { Header, Footer } from "@modules/navigation";
import { Button } from "@modules/ui";
import window from "window-or-global";

const Layout = ({ children, pageContext, uri }) => {
  const hasTopSection = uri ? uri.split("/").length >= 3 : false;

  // const [showScrollCTA, setShowScrollCTA] = useState(
  //   window.sessionStorage?.getItem("ScrollCTAHidden") === "true"
  // );
  // const hideScrollCTA = pageContext.frontmatter
  //   ? pageContext.frontmatter.hideScrollCTA
  //   : false;
  // const CTAScrollPercent = 55; //<- 75% - Footer 20% height
  // const scrollCTAHidden =
  //   window.sessionStorage?.getItem("ScrollCTAHidden") === "true";

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (hideScrollCTA || scrollCTAHidden === true || showScrollCTA) {
  //       return;
  //     }

  //     var h = document.documentElement,
  //       b = document.body,
  //       st = "scrollTop",
  //       sh = "scrollHeight";

  //     const scrollPercent =
  //       ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

  //     if (scrollPercent > CTAScrollPercent && !scrollCTAHidden) {
  //       //Show the Scroll CTA
  //       setShowScrollCTA(true);
  //     }
  //   };

  //   if (window.addEventListener) {
  //     window.addEventListener("scroll", onScroll);

  //     return () => {
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }
  // });

  // const closeScrollCTA = () => {
  //   if (window.sessionStorage) {
  //     window.sessionStorage.setItem("ScrollCTAHidden", true);
  //   }

  //   setShowScrollCTA(true);
  // };

  // const CTAVariant = {
  //   visible: {
  //     opacity: 1,
  //     bottom: "27px",
  //     transition: { ease: "easeOut" },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     bottom: "-300px",
  //     transition: { ease: "easeOut" },
  //   },
  // };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Header />
      <Flex
        as="main"
        sx={{
          maxWidth: "1296px",
          flex: "1 0 auto",
          width: "100%",
          m: "0 auto",
          pr: 0,
          pt: ["90px", "90px", "unset"],
          position: "relative",
        }}
        className="content-boundary"
      >
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: "column",
            width: hasTopSection ? "80%" : "",
          }}
        >
          <Flex
            sx={{
              alignItems: "start",
              pr: ["unset", "unset", "64px"],
            }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />

      {/* <motion.div
        initial="hidden"
        variants={CTAVariant}
        animate={showScrollCTA ? "visible" : "hidden"}
        sx={{
          borderRadius: "12px",
          boxShadow: "raised",
          backgroundColor: "primaryMuted",
          border: "0.5px solid",
          borderColor: "muted",
          width: ["calc(100% - 46px)", "calc(100% - 46px)", "390px"],
          position: "fixed",
          right: "23px",
          padding: "24px",
          pt: "22px",
          bottom: "27px",
        }}
      >
        <Text
          sx={{
            fontWeight: "500",
            fontSize: "20px",
            letterSpace: "0.4px",
            color: "text",
            mb: "10px",
            lineHeight: "normal",
            maxWidth: "90%",
          }}
        >
          Help us make this site better!
        </Text>

        <Text as="p" sx={{ mb: "26px" }}>
          Your feedback will help us improve the overall experience on this
          website.
          <br />
          <br />
          Do you have 20 minutes to spare?
        </Text>

        <Icon
          name="close"
          size="15px"
          sx={{
            position: "absolute",
            top: "27px",
            right: "24px",
            cursor: "pointer",
          }}
          onClick={closeScrollCTA}
        />

        <Button
          outline
          inline
          hideExternalIcon
          onClick={closeScrollCTA}
          href="https://timothywilliamblack.typeform.com/to/yp8T7ogv"
          sx={{ margin: 0 }}
        >
          Take Survey
        </Button>
      </motion.div> */}
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
