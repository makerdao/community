/** @jsx jsx */
import { Box, Text, jsx } from "theme-ui";

import { formatNumber } from "@utils";

const Stat = ({ data, alt, children }) => (
  <Box
    sx={{
      fontFamily: "transparencyDashboard",
      textAlign: "center",
      display: "inline-block",
    }}
  >
    <Text
      as="h1"
      sx={{
        color: alt ? "transDash_makerOrange" : "primary",
        fontWeight: "400",
        my: 3,
        fontSize: "2.25rem",
      }}
    >
      {data ? formatNumber(data) : "N/A"}
    </Text>
    <Text
      as="h2"
      sx={{
        fontSize: "1.5rem",
        fontWeight: "400",
        my: "1rem",
        maxWidth: "200px",
      }}
    >
      {children}
    </Text>
  </Box>
);

export default Stat;
