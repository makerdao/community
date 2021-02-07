// @flow
/** @jsx jsx */

import React from "react";
import type { Node } from "react";
import { format } from "date-fns";
import { Image, Box, Flex, Text, jsx } from "theme-ui";

// $FlowFixMe
import allContributors from "@content/all-contributors.json";

type TAuthor = {
  login: string,
  name: string,
  avatar_url?: string,
  profile?: string,
  contributions?: Array<string>,
};

/* 
	Get's the author data object from all-contributors json
	OR just returns an object with the name of the author.
*/
export function getAuthorData(_author: string): TAuthor {
  return (
    allContributors.contributors.find(
      (n) => n.login && n.login === _author.replace(/@/g, "")
    ) || { name: _author } //<- Incase someone puts an @ symbol in their entry
  );
}

type TBlogAuthorProps = {
  isContributors?: boolean,
  date?: string,
  authors: Array<string>,
};

export default function BlogAuthor({
  isContributors = false,
  date = null,
  authors,
  ...props
}: TBlogAuthorProps): Node {
  /*
		NOTE(Rejon): We don't have a case of rendering multiple authors in a list like format.
		So we only support one author for this case, unless otherwise specified.
	*/
  const [soleAuthor] = authors;

  const authorToRender = getAuthorData(soleAuthor);

  /*
		Single Author Element
		NOTE(Rejon): Would typically go at the top of an article,
		or below an article title inside of an article card.
	*/
  return (
    <Flex {...props}>
      {authorToRender.avatar_url ? (
        <Box>
          <Image
            src={authorToRender.avatar_url}
            sx={{
              width: 60,
              height: 60,
              borderRadius: 99999,
            }}
          />
        </Box>
      ) : null}

      <Box>
        <Flex sx={{ flexDirection: "column" }}>
          <Box sx={{ pl: 2 }}>{authorToRender.name}</Box>
          {date ? (
            <Box sx={{ pl: 2 }}>
              <Text sx={{ color: "muted" }}>
                {format(new Date(date), "MMMM d, yyyy")}
              </Text>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );
}
