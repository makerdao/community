/** @jsx */

import React from "react";
import { Text } from "theme-ui";

export default function Heading4(props) {
  return (
    <Text
      as="h4"
      sx={{
        mb: "32px",
        lineHeight: "normal",
        fontSize: "20px",
        fontWeight: "500",
        letterSpacing: "0.3px",
        fontFamily: "heading",
        color: "text",
        marginTop: "8px",
        marginBottom: "8px",
      }}
      {...props}
    />
  );
}
