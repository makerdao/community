/** @jsx jsx */

import React, { Fragment } from "react";
import { BlogAuthor, BlogContributors, BlogCard } from "@modules/blog";
import { Divider } from "@modules/ui";
import { SEO } from "@modules/utility";
import { Heading } from "@modules/ui/heading";
import { Box, Flex, jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { console } from "window-or-global";

///MDX Layout for POSTs
export default ({ children, pageContext }) => {
  const {
    title,
    description,
    keywords, //<- Seo
    authors,
    contributors,
    date,
    recommend, //<- Links to other blogs TODO(Rejon): I'm thinking of fetching blog posts based on their slugs using lunr
  } = pageContext.frontmatter;

  const { allMdx } = useStaticQuery(graphql`
    query allBlogPosts {
      #Regex for all blog posts
      allMdx(filter: { fileAbsolutePath: { regex: "//blogPosts/" } }) {
        edges {
          node {
            fileAbsolutePath
            excerpt(truncate: true, pruneLength: 200)
            frontmatter {
              title
              date(formatString: "MM/DD/YYYY")
              description
              authors
            }
            mdxAST
            id
          }
        }
      }
    }
  `);

  const otherPosts = recommendations?.map((rec) => {
    return allMdx.edges.filter(({ node }) =>
      node.fileAbsolutePath.includes(rec)
    )[0];
  });

  const recommendations = otherPosts && otherPosts.length > 0;

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
          <h2 sx={{ mb: "66px" }}> Read More </h2>
          <Flex
            sx={{
              justifyContent: "start",
              width: "100%",
              mb: [0, "80px", "80px"],
              flexDirection: ["column", "row", "row"],
              "& > *:not(:last-child)": {
                mr: "96px",
              },
            }}
          >
            {otherPosts.map(({ node }, index) => (
              <BlogCard {...node} key={`blog-recommendation-${index}`} />
            ))}
          </Flex>
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
