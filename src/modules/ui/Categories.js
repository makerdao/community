/** @jsx jsx */
import { Children } from "react";
import { jsx, Flex, Grid } from "theme-ui";

const Categories = ({ children, minBoxSize = "321px" }) => {
  const _Children = Children.toArray(children);

  const childElementStyles = {
    position: "relative",
    alignItems: "center",
    minHeight: "260px",
    border: "1px solid",
    borderColor: "muted",
    bg: "background",
    "& > * > div": { color: "textMuted", mb: "9px" },
    padding: "19px 33px",
    borderRadius: "4px",
    "& > * > div:nth-of-type(2) > a, & > * > div:nth-of-type(3) > a": {
      fontWeight: "500",
      fontSize: "24px",
    },
    "& > * > .statusBanner:first-of-type": {
      position: "absolute",
      maxWidth: "65.29%",
      color: "background",
      right: "16px",
      top: "16px",
      width: "auto",
    },
    "& > * > *:only-child": { m: 0 },
    "& > * > svg:first-of-type, & > * > svg:nth-of-type(2)": {
      width: "64px",
      height: "auto",
    },
  };

  //Column Widths based on item count
  const columnWidth = () => {
    if (_Children.length === 1) {
      //1 item, full width
      return `minmax(${minBoxSize}, 1fr)`;
    }

    if (_Children.length === 2 || _Children.length === 4) {
      // 2 or 4 items (2 x 2)
      return `minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr)`;
    }

    //3 - Infinity Items (3 x 3)
    return `minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr)`;
  };

  //Odd Children case should be centered properly. We have to use Flexbox for this case.
  //The logic is: Child count is greater than 4 AND Child count is NOT divisible by 3.
  //NOTE(Rejon): We want to isolate counts with leftovers in 3x3 grids like 5, 7, 8, 10, 11, 13, ect.
  //NOTE(Rejon): our nth-child(3n) selector ensures that every 3rd child doesn't have a margin right.
  if (_Children.length > 4 && _Children.length % 3 !== 0) {
    return (
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "107.58%",
          ml: "calc(-7.58% / 2)",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {_Children.map((child, index) => {
          return (
            <Flex
              key={`category-child-${index}`}
              sx={{
                ...childElementStyles,
                "&:not(:nth-of-type(3n))": { mr: "16px" },
                mb: "21px",
                maxWidth: "calc(33% - 8px)",
                minWidth: minBoxSize,
              }}
            >
              {child}
            </Flex>
          );
        })}
      </Flex>
    );
  }

  return (
    <Grid
      gap="21px 16px"
      columns={columnWidth()}
      sx={{
        margin: "auto",
        width: "107.58%",
        ml: "calc(-7.58% / 2)",
        mb: "68px",
      }}
    >
      {_Children.map((child, index) => {
        return (
          <Flex sx={childElementStyles} key={`category-child-${index}`}>
            {child}
          </Flex>
        );
      })}
    </Grid>
  );
};

export default Categories;
