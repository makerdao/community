/** @jsx jsx */
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";

const Layout = ({ children, pageContext, uri, ...props }) => {
  const hasTopSection = uri ? uri.split('/').length >= 3 : false ; 
  
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
          maxWidth: "1440px",
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
              pr: hasTopSection ? ['unset', 'unset', '64px'] : 0
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
