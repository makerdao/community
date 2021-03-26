// @flow
/** @jsx jsx */

import React from "react";
import type { Node } from "react";
import { jsx } from "theme-ui";

export default function Divider(props: any): Node {
  return (
    <hr
      sx={{
        borderTop: "1px solid",
        borderColor: "muted",
        width: ["100%", "100%", "90%"],
      }}
      {...props}
    />
  );
}
