/** @jsx jsx */
import { Children } from "react";
import { Box, Grid, jsx } from "theme-ui";

const Tout = ({ children }) => {
  const _Children = Children.toArray(children);
  const isGrid = _Children.length > 1;

  const ToutElement = ({ children }) => (
    <Box
      sx={{
        backgroundColor: "surface",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "muted",
        boxShadow: "float",
        mb: !isGrid ? "24px" : "",
        "& > *:only-child": {
          m: 0,
        },
        "& > *:last-child, & > * > *:last-child": {
          m: 0, //NOTE(Rejon): I use important here to override internal styles.
        },
        p: 4,
        "& h2": {
          mb: "12px",
        },
        "& p:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      {children}
    </Box>
  );

  if (isGrid) {
    return (
      <Grid
        columns={[
          [1, "1fr"],
          [2, "1fr 1fr"],
          [2, "1fr 1fr"],
        ]}
        gap={"24px"}
        sx={{ gridAutoRows: "min-content", mb: "24px" }}
      >
        {_Children.map((child, index) => (
          <ToutElement key={`tout-child-${index}`}>{child}</ToutElement>
        ))}
      </Grid>
    );
  }

  return <ToutElement>{children}</ToutElement>;
};

export default Tout;
