/** @jsx jsx */
import { useState, useEffect } from "react";
import { Link } from "@modules/navigation";

import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Sidenav_Node = ({
  url,
  title,
  items,
  currentPath,
  parentDepth = 0,
  onClick,
  ...otherProps
}) => {
  const [active, setActive] = useState(
    currentPath === url || currentPath.includes(otherProps.slugPart)
  );
  const hasChildren = items.length !== 0;

  //URL fallback for directories that have children, but don't have an index file.
  if (!url && hasChildren) {
    url = items[0].url;
  }

  useEffect(() => {
    if (
      !active &&
      (currentPath === url || currentPath.includes(otherProps.slugPart))
    ) {
      setActive(true);
    }
  }, [currentPath, url, otherProps.slugPart]);

  return (
    <li
      sx={{
        color:
          currentPath === url || currentPath.includes(otherProps.slugPart)
            ? "primary"
            : "text",
        position: "relative",
        "&:not(:last-of-type)": {
          mb: "14px",
        },
      }}
    >
      {title && (
        <Link
          to={url}
          partiallyActive={active}
          activeClassName={active ? "active" : " "}
          onClick={onClick}
          sx={{
            color:
              currentPath === url || currentPath.includes(otherProps.slugPart)
                ? "primary"
                : "text",
            fontWeight: "normal",
            py: "6px",
            pr: "36px",
            textDecoration: "none",
            width: "100%",
            fontSize: 3,
            overflowWrap: "break-word",
            wordWrap: "break-word",
            display: "inline-block",
            "&:hover ": {
              textDecoration: "none",
              "& > svg": {
                transform: active
                  ? "translate(0, -50%) rotate(0deg)"
                  : "translate(0, -50%) rotate(90deg)",
                transition: "all .1s ease",
              },
            },
          }}
        >
          {title}
        </Link>
      )}

      {hasChildren && (
        <Icon
          name={active ? "chevron_down" : "chevron_right"}
          onClick={() => setActive(!active)}
          sx={{
            position: "absolute",
            cursor: "pointer",
            width: "32px",
            height: "32px",
            right: "2%",
            p: "7px",
            top: [
              "calc(1.5em)",
              "calc(1.5em)",
              !active ? "50%" : "calc(.8em + 6px)",
            ],
            transform: "translate(0, -50%) rotate(0deg)",
            transformOrigin: "center",
            transition: "all .2s ease",
            "&:hover": {
              transform: active
                ? "translate(0, -50%) rotate(180deg)"
                : "translate(0, -50%) rotate(90deg)",
            },
          }}
        />
      )}

      {active && hasChildren && (
        <ul
          sx={{
            m: 0,
            ml: parentDepth < 3 ? 3 : 0, //NOTE(Rejon): Don't let the margin left continue for more than 3 depth. It just looks wrong.
            mt: "6px",
            pl: 0,
            minWidth: "200px",
            pr: "31px",
            listStyleType: "none",
          }}
        >
          {items.map((item) => (
            <Sidenav_Node
              key={`${item.url}-${item.index}`}
              parentActive={active}
              onClick={onClick}
              currentPath={currentPath}
              parentDepth={parentDepth + 1}
              {...item}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidenav_Node;
