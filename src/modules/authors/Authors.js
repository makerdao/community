// @flow
/** @jsx jsx */

import { GridCell, ListElement } from "@modules/authors";
import { Children } from "react";
import { Grid, jsx } from "theme-ui";
import type { Node } from "react";

import contributorsData from "./transformers/contributorsData";

export type TAuthorRendererProps = {
  list: boolean,
  all: boolean,
  contributions: boolean,
  noLinks: boolean,
  author: Array<string> | string,
  noUsername: boolean,
  children: Node,
};

export default function Authors({
  list = false,
  all = false,
  contributions = true,
  noLinks = false,
  author,
  noUsername = false,
  children,
  ...props
}: TAuthorRendererProps): Node {
  const _children = Children.toArray(children);
  const contributors = contributorsData(all, list, author, _children, props);

  return (
    <Grid
      gap={0}
      columns={list ? 1 : [2, 4, 6]}
      sx={{
        borderLeft: !list ? "1px solid" : "unset",
        borderColor: "muted",
        gridRowGap: list ? "2rem" : "unset",
        marginBottom: "1rem",
      }}
    >
      {contributors.map((data, index) =>
        list ? (
          <ListElement
            key={`list-author-${index}`}
            {...data}
            index={index}
            noLinks={noLinks}
            noUsername={noUsername}
            hideContributions={!contributions}
          />
        ) : (
          <GridCell
            key={`grid-author-${index}`}
            {...data}
            index={index}
            noLinks={noLinks}
            hideContributions={!contributions}
          />
        )
      )}
    </Grid>
  );
}
