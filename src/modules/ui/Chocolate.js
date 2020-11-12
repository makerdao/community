/** @jsx jsx */
import { Children } from "react";
import { jsx, Grid } from "theme-ui";

const Chocolate = ({ children }) => {
  const _Children = Children.toArray(children);

  //Column Widths based on item count
  const columnWidth = () => {
    if (_Children.length === 1) {
      //1 item, full width
      return `minmax(100px, 1fr)`;
    }

    if (_Children.length === 2 || _Children.length === 4) {
      // 2 or 4 items (2 x 2)
      return `minmax(100px, 1fr) minmax(100px, 1fr)`;
    }

    //3 - Infinity Items (3 x 3)
    return `minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)`;
  };

  return (
    <Grid
      gap={4}
      columns={["1fr", "1fr", columnWidth()]}
      sx={{
        "& > * > * > img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        },
        mb: 4,
      }}
    >
      {children}
    </Grid>
  );
};

export default Chocolate;
