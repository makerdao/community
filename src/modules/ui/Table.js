/** @jsx jsx */
import { jsx } from "theme-ui";

const Table = ({ children }) => (
  <table
    sx={{
      borderCollapse: "collapse",
      fontSize: 3,
      textAlign: "center",
      "& td": {
        color: "textMuted",
        border: "1px solid",
        borderColor: "muted",
        py: 3,
        px: "24px",
      },
      "& th": {
        color: "text",
        fontStyle: "normal",
        fontWeight: 600,
        border: "1px solid",
        borderColor: "muted",
        py: 3,
        px: "24px",
      },
    }}
  >
    {children}
  </table>
);

export default Table;
