// @flow
/** @jsx jsx */

import { Box, Flex, Image, Text, jsx } from 'theme-ui';

import type { Node } from 'react';
import { format } from 'date-fns';
import { getAuthorData } from '../data';

type TBlogAuthorProps = {|
  date?: string,
  authors: Array<string>,
  isDefaultLocale?: boolean,
|};

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

  if (authorToRender.profile) {
    return (
      <a
        href={authorToRender.profile}
        sx={{ display: 'inline-block', textDecoration: 'none' }}
        target="_blank"
        rel="noreferrer"
      >
        <Author
          authorToRender={authorToRender}
          date={date}
          isDefaultLocale={isDefaultLocale}
          {...props}
        />
      </a>
    );
  }

  /*
		Single Author Element
		NOTE(Rejon): Would typically go at the top of an article,
		or below an article title inside of an article card.
	*/
  return (
    <Author
      authorToRender={authorToRender}
      date={date}
      isDefaultLocale={isDefaultLocale}
      {...props}
    />
  );
}

function Author({ authorToRender, date, ...props }) {
  return (
    <Flex {...props}>
      <Box>
        <Image
          src={
            authorToRender.avatar_url
              ? authorToRender.avatar_url
              : '/images/avatar-default.png'
          }
          sx={{
            width: 64,
            height: 64,
            borderRadius: '100%',
            display: 'inline-block',
          }}
        />
      </Box>

      <Box>
        <Flex sx={{ flexDirection: 'column' }}>
          <Box sx={{ pl: 2 }}>
            <Text sx={{ fontWeight: 400, color: 'text' }}>
              {authorToRender.name}
            </Text>
          </Box>
          {date ? (
            <Box sx={{ pl: 2 }}>
              <Text sx={{ color: 'mutedAlt', fontWeight: 400 }}>
                {format(new Date(date), 'MMMM d, yyyy')}
              </Text>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );
}
