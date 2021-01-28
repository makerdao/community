/**@jsx */

import React from "react";
import { Text } from "theme-ui";

export default function Heading1(props) {
  return (
    <Text
      variant="h1"
      sx={{
        mb: "24px",
        lineHeight: "normal",
        fontSize: "48px",
        letterSpacing: "0.3px",
        fontWeight: "500",
        fontFamily: "heading",
        color: "text",
        marginTop: "48px",
        marginBottom: "32px",
      }}
      {...props}
    />
  );
}
