/**@jsx */

import React from "react";
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from ".";

export default function Heading({ level, ...props }) {
  switch (level) {
    case 5:
      return <Heading5 {...props} />;
    case 4:
      return <Heading4 {...props} />;
    case 3:
      return <Heading3 {...props} />;
    case 2:
      return <Heading2 {...props} />;
    default:
      return <Heading1 {...props} />;
  }
}
