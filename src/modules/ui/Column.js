/** @jsx jsx */
import { Children } from "react";
import { Box, Grid, jsx } from "theme-ui";

const Column = ({ children }) => {
  const _Children = Children.toArray(children);

  const containerStyles = {
    borderRadius: "12px",
    color: "textMuted",
    bg: "surfaceAlt",
    px: "27px",
    py: "10px",
    boxShadow: "float",
    border: "1px solid",
    borderColor: "muted",
    "& > *:only-child, & >*:only-child > *": { m: 0 },
  };

  const desktopColumns = _Children.length > 1 ? [2, "1fr 1fr"] : [1, "1fr"];

  return (
    <Grid
      gap={"24px"}
      sx={{ mb: 4 }}
      columns={[[1, "1fr"], [1, "1fr"], desktopColumns]}
    >
      {_Children.map((child, index) => {
        const childChildren = Children.toArray(child.props.children);
        if (
          typeof child.props.children !== "string" &&
          childChildren.length > 0
        ) {
          const headerElement = childChildren[0];
          const childElements = childChildren.slice(1);

          return (
            <Box
              key={`column-child-element-${index}`}
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "float",
                border: "1px solid",
                borderColor: "muted",
                bg: "surfaceAlt",
              }}
            >
              <Box
                className="headerElement"
                sx={{
                  color: "onPrimary",
                  bg: "primary",
                  pt: "15px",
                  pb: 2,
                  px: "27px",
                  "& > *:only-child, & > *:only-child > *": { m: 0 },
                }}
              >
                {headerElement}
              </Box>

              <Box
                sx={{
                  px: "27px",
                  pt: 3,
                  pb: "27px",
                  color: "textMuted",
                  "& > *:only-child, & > *:last-child": {
                    m: 0,
                  },
                }}
              >
                {childElements}
              </Box>
            </Box>
          );
        }

        return (
          <Box sx={containerStyles} key={`column-child-element-${index}`}>
            {child}
          </Box>
        );
      })}
    </Grid>
  );
};

export default Column;
