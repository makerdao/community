// @flow
/** @jsx jsx */

// $FlowFixMe
import allContributors from "@content/all-contributors.json";
import { format } from "date-fns";
import { Fragment } from "react";
import { Box, Flex, Image, jsx, Text } from "theme-ui";
import type { Node } from "react";

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
  date?: string,
  authors: Array<string>,
  isDefaultLocale?: boolean,
};

export default function BlogAuthor({
  date = null,
  authors,
  isDefaultLocale,
  ...props
}: TBlogAuthorProps): Node {
  /*
		NOTE(Rejon): We don't have a case of rendering multiple authors in a list like format.
		So we only support one author for this case, unless otherwise specified.
	*/
  const [soleAuthor] = authors;

  const authorToRender = getAuthorData(soleAuthor);

  const renderObj = (
    <Flex {...props}>
      <Box>
        <Image
          src={
            authorToRender.avatar_url
              ? authorToRender.avatar_url
              : "/images/avatar-default.png"
          }
          sx={{
            width: 64,
            height: 64,
            borderRadius: "100%",
            display: "inline-block",
          }}
        />
      </Box>

      <Box>
        <Flex sx={{ flexDirection: "column" }}>
          <Box sx={{ pl: 2 }}>
            <Text sx={{ fontWeight: 400, color: "text" }}>
              {authorToRender.name}
            </Text>
          </Box>
          {date ? (
            <Box sx={{ pl: 2 }}>
              <Text sx={{ color: "mutedAlt", fontWeight: 400 }}>
                {format(new Date(date), "MMMM d, yyyy")}
              </Text>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );

  if (authorToRender.profile) {
    return (
      <a
        href={authorToRender.profile}
        sx={{ display: "inline-block", textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        {renderObj}
      </a>
    );
  }

  /*
		Single Author Element
		NOTE(Rejon): Would typically go at the top of an article,
		or below an article title inside of an article card.
	*/
  return <Fragment>{renderObj}</Fragment>;
}
