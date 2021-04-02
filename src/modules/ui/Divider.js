// @flow
/** @jsx jsx */

import { jsx } from "theme-ui";
import type { Node } from "react";

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
