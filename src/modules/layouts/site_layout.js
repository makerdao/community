/** @jsx jsx */
import PropTypes from "prop-types";
import { Box, Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";

import { Header, Footer, Sidenav } from "@modules/navigation";

const Layout = ({ children, pageContext, uri, ...props }) => {
  const hasTopSection = uri.split('/').length >= 3;
  
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
        
        <Flex sx={{ flexGrow: 1, flexDirection: "column", width: hasTopSection ? '80%' : '' }}>
          <Flex
            sx={{
              alignItems: 'start',
              pr: ['unset', 'unset','64px']
            }}
          >
          {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
