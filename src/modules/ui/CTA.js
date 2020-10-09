/** @jsx jsx */
import { jsx, Card } from "theme-ui";

const CTA = ({ children, ...otherProps }) => (
  <Card
    {...otherProps}
    sx={{
      p: "24px",
      width: "100%",
      borderColor: "primary",
      bg: "successAlt",
      mb: "24px",
      "& > *:only-child": { m: 0 },
    }}
  >
    {children}
  </Card>
);

export default CTA;
