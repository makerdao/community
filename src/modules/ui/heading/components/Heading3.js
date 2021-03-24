/** @jsx*/

import React from "react";
import { Text } from "theme-ui";

export default function Heading3(props) {
  return (
    <Text
      as="h3"
      sx={{
        mb: "32px",
        lineHeight: "normal",
        fontSize: "24px",
        fontWeight: "500",
        letterSpacing: "0.3px",
        fontFamily: "heading",
        color: "text",
        marginTop: "16px",
        marginBottom: "16px",
      }}
      {...props}
    />
  );
}
