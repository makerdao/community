/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Link } from "@modules/navigation";

const SearchHit = ({ title, excerpt, url, ...props }) => (
  <Link
    to={url}
    partiallyActive={false}
    activeClassName="not-active"
    {...props}
  >
    <Text
      variant="h5"
      aria-live="assertive"
      sx={{
        m: 0,
        textDecoration: "none",
        "& mark": {
          backgroundColor: "primary",
        },
      }}
    >
      {title}
    </Text>
    <Text
      aria-live="assertive"
      sx={{
        textDecoration: "none",
        "& mark": {
          backgroundColor: "primaryMuted",
        },
      }}
    >
      {excerpt}
    </Text>
  </Link>
);

export default SearchHit;
