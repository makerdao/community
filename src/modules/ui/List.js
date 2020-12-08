/** @jsx jsx */
import { Children } from "react";
import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "@modules/navigation";

const ListElement = ({ children }) => (
  <Flex
    sx={{
      px: "8px",
      py: "23px",
      minHeight: "60px",
      borderTop: "1px solid",
      borderColor: "muted",
      flexDirection: "column",
      alignItems: "flex-start",
      "& > * > *:only-child, & > * > *:nth-of-type(1)": {
        fontWeight: "normal",
        fontSize: "18px",
        color: "textMuted",
        lineHeight: "normal",
      },
      "& > * > *:only-child, & > *:only-child": {
        mb: 0,
      },
      "& > * > *:not(:only-child):nth-of-type(1)": {
        mb: "8px",
      },
      "& > * > *:not(:nth-of-type(1))": {
        fontWeight: "normal",
        fontSize: "16px",
        color: "textMuted",
      },
    }}
  >
    {children}
  </Flex>
);

const AdvancedListElement = ({
  childData: { heading, _children },
  linkData,
}) => {
  const ListEl = ({ children }) => (
    <ListElement sx={{ flexDirection: children ? "row" : "" }}>
      {children ? (
        <Flex sx={{ flexDirection: "row" }}>
          {children}
          <Flex
            className="content-container"
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              "& > *:only-child, & > *:nth-of-type(1)": {
                fontWeight: "normal",
                fontSize: "18px",
                color: "textMuted",
                lineHeight: "normal",
              },
              "& > *:not(:nth-of-type(1))": {
                fontWeight: "normal",
                fontSize: "16px",
                color: "textMuted",
              },
              "& > *:only-child, & > *:only-child > *:last-child": {
                mb: 0,
              },
            }}
          >
            {heading && (
              <Box
                sx={{
                  m: 0,
                  "& > *": { m: 0, mb: "8px", lineHeight: "normal" },
                }}
              >
                {heading}
              </Box>
            )}
            <Box
              sx={{
                width: "100%",
                "& > *:only-child": {
                  mb: 0,
                },
              }}
            >
              {_children}
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Box
          sx={{
            width: "100%",
            "& > *:only-child, & > *:only-child > *:last-child": {
              mb: 0,
            },
          }}
        >
          {heading && (
            <Box
              sx={{
                p: {
                  fontWeight: "normal",
                  fontSize: "18px",
                  color: "text",
                  lineHeight: "normal",
                },
                "ol,ul": {
                  p: 0,
                  pl: 3,
                  m: 0,
                },
                m: 0,
                mb: "8px",
                "& > *": {
                  m: 0,
                  lineHeight: "normal",
                },
              }}
            >
              {heading}
            </Box>
          )}
          <Box
            sx={{
              width: "100%",
              fontWeight: "normal",
              fontSize: "16px",
              color: "textMuted",
              "& > *:only-child": {
                mb: 0,
              },
            }}
          >
            {_children}
          </Box>
        </Box>
      )}
    </ListElement>
  );

  if (linkData !== null) {
    delete linkData.children;

    return (
      <Link
        hideExternalIcon
        {...linkData}
        sx={{
          display: "block",
          "& > *": {
            width: "100%",
            transition: "all .1s ease",
            color: "text",
            "&:hover": {
              color: "text",
              bg: "primaryMuted",
              textDecoration: "none",
            },
          },
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        <ListEl>
          <Icon name={"increase"} size={3} sx={{ mr: "29px", ml: "5px" }} />
        </ListEl>
      </Link>
    );
  } else {
    return <ListEl />;
  }
};

const List = ({ children }) => {
  const _Children = Children.toArray(children);

  //Logic check for rendering a link element vs a list element.
  const childListLinkRenderCheck = (child, index) => {
    if (
      child.props &&
      (child.props.mdxType === "Box" ||
        child.props.mdxType === "Link" ||
        child.props.mdxType === "a" ||
        (child.props.mdxType === "p" &&
          child.props.children &&
          child.props.children.props &&
          child.props.children.props.mdxType === "a"))
    ) {
      const boxChildren = Children.toArray(child.props.children);
      const isLink =
        child.props.mdxType === "Link" || child.props.mdxType === "a";
      const isMDLink =
        child.props.mdxType === "p" &&
        child.props.children &&
        child.props.children.props &&
        child.props.children.props.mdxType === "a";
      const childData = {};

      let linkData = isLink ? { ...child.props } : null; //If this element is a Link grab it's href.

      if (isMDLink) {
        //For when MD spec links are used (ie. [Heading](https://website.com))
        childData.heading = child.props.children.props.children;
        linkData = { ...child.props.children.props };
      } else {
        if (boxChildren.length > 1) {
          childData.heading = boxChildren[0]; //<- First child is heading
          childData._children = boxChildren.slice(1, boxChildren.length); //<- Render other children as sub content
        } else if (boxChildren.length === 1) {
          childData._children = boxChildren[0];
        }
      }

      const advancedElementProps = { childData, linkData, index };

      return (
        <AdvancedListElement
          key={`list-element-${index}`}
          {...advancedElementProps}
        />
      );
    }

    return <ListElement key={`list-element-${index}`}>{child}</ListElement>;
  };

  return (
    <Box
      sx={{
        "& > *:last-child": {
          mb: 4,
        },
      }}
    >
      {_Children.map((child, index) => childListLinkRenderCheck(child, index))}
    </Box>
  );
};

export default List;
