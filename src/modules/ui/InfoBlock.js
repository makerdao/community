/** @jsx jsx */
import { Children } from "react";
import { Flex, jsx } from "theme-ui";

//TODO(Rejon): On mobile have image ALWAYS stack in order first. Do this when we have breakpoints figured out.
const InfoBlock = ({ children }) => {
  let _Children = Children.toArray(children);
  let imageIndex = 0;
  let hasImageMobileOrdering = {};

  //NOTE(Rejon): In the future when css4 comes out this will be replaced by the :has() selector!
  const hasImage = _Children.find((n, index) => {
    const _isTrue =
      n.props.mdxType === "Image" ||
      (n.props.children &&
        !Array.isArray(n.props.children) &&
        n.props.children.props &&
        n.props.children.props.mdxType === "img");

    if (_isTrue) {
      imageIndex = index;
      return _isTrue;
    }

    return false;
  });

  if (hasImage && imageIndex !== 0) {
    hasImageMobileOrdering[`& > *:nth-of-type(${imageIndex + 1})`] = {
      order: [0, 0, 1],
    };

    hasImageMobileOrdering[`& > *:not(:nth-of-type(${imageIndex + 1}))`] = {
      order: [1, 1, 0],
    };
  }

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: ["column", "column", "row"],
        width: "100%",
        px: ["20px", "20px", "10.5%"],
        py: ["60px", "60px", "72px"],
        textAlign: hasImage ? "" : "center",
        "& > *": {
          width: ["100%", "100%", "50%"],
          minWidth: ["unset", "unset", "300px"],
          mb: 0,
          margin: hasImage ? "" : "auto",
          "& > *": {
            mx: hasImage ? "" : "auto",
          },
        },
        "& > * img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        },
        "& > *:first-of-type": {
          minWidth: ["unset", "unset", "250px"],
          mr: hasImage ? [0, 0, "4%"] : 0,
        },
        "& > *:last-child": {
          minWidth: ["unset", "unset", "250px"],
          ml: hasImage ? [0, 0, "4%"] : 0,
        },
        ...hasImageMobileOrdering,
      }}
    >
      {_Children.map((child) => child)}
    </Flex>
  );
};

export default InfoBlock;
