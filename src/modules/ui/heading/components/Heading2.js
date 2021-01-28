/** @jsx */

import React from "react";
import { Text } from "theme-ui";

export default function Heading2(props) {
  return (
    <Text
      variant="h2"
      sx={{
        mb: "32px",
        lineHeight: "normal",
        fontSize: "32px",
        fontWeight: "500",
        letterSpacing: "0.3px",
        fontFamily: "heading",
        color: "text",
        marginTop: "48px",
        marginBottom: "24px",
      }}
      {...props}
    />
  );
}
