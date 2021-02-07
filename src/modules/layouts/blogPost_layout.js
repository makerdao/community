/** @jsx jsx */

import React, { Fragment } from "react";
import { BlogAuthor, BlogContributors } from "@modules/blog";
import { Divider } from "@modules/ui";
import { SEO } from "@modules/utility";
import { Heading } from "@modules/ui/heading";
import { Box, Flex, jsx } from "theme-ui";

///MDX Layout for POSTs
export default ({ children, pageContext }) => {
  const {
    title,
    description,
    keywords, //<- Seo
    authors,
    contributors,
    date,
    recommendations, //<- Links to other blogs TODO(Rejon): I'm thinking of fetching blog posts based on their slugs using lunr
  } = pageContext.frontmatter;

  const seo = {
    title,
    description,
    keywords,
  };

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <ContentBlock>
        <SEO {...seo} />

        <Heading level={1}>{title}</Heading>

        {authors ? (
          <BlogAuthor sx={{ mb: "16px" }} authors={authors} date={date} />
        ) : null}

        {children}
      </ContentBlock>

      {contributors ? (
        <Box sx={{ pl: [4, 4, "64px"], pr: [4, 4, 0], mt: 2, mb: 2 }}>
          <Divider />
        </Box>
      ) : null}

      {contributors ? (
        <ContentBlock>
          <h2> Contributors </h2>
          <p>This article is possible with a little help from friends.</p>
          <BlogContributors contributors={contributors} />
        </ContentBlock>
      ) : null}

      {recommendations ? (
        <Box sx={{ pl: [4, 4, "64px"], pr: [4, 4, 0], mt: 4, mb: 2 }}>
          <Divider />
        </Box>
      ) : null}

      {recommendations ? (
        <ContentBlock>
          <h2>Read More</h2>
          {/* TODO(Rejon): Figure out data for fetching recommendations */}
          <ul>
            <li>
              {/* <BlogCard isLatest post={{ type: "governance" }} />
            <BlogCard isLatest post={{ type: "governance" }} />
            <BlogCard isLatest post={{ type: "governance" }} /> */}
            </li>
          </ul>
        </ContentBlock>
      ) : null}
    </Flex>
  );
};

function ContentBlock({ children }) {
  return (
    <Box
      as="post"
      sx={{
        width: ["100%", "100%", "80%"],
        m: "0 auto",
        mt: [2, 2, 2],
        mb: [2, 2, 2],
        pl: [4, 4, "64px"],
        pr: [4, 4, 0],
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}
