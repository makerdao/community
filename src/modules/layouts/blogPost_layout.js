/** @jsx jsx */

import React, { Fragment } from "react";
import isNil from 'lodash/isNil'
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
    image,
    recommend, 
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
              image
            }
            id
          }
        }
      }
    }
  `);

  //Split absolute path up to blog, get directory AFTER blog. 
  let postType = null;

  const pagePathSplit = pageContext.pagePath.split("/").splice(1, pageContext.pagePath.split("/").length - 2);
  const typeIndex = pagePathSplit.indexOf("blog") + 1; 

  //If the slug in the path is NOT the last slug, treat it as the post type.
  if (typeIndex !== pagePathSplit.length - 1)
  {
    postType = pagePathSplit[typeIndex];
  }

  let postImage = typeof image === 'string' ? image : `/images/blog_headers/${postType}_01.png`;

  if (typeof image === "number" && (image <= 4 && image >= 1))
  {
      postImage = `/images/blog_headers/${postType}_0${image}.png`;
  }

  const otherPosts = recommend?.map((rec) => {
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

        <img src={postImage} sx={{
          width: '100%',
          objectFit: 'cover',
          maxHeight: '478px',
          mb: '48px'
        }} />

        <div sx={{
          '& > *:first-of-type': {
            mt: 0
          }
        }}>
          {children}
        </div>
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
        mt: [2, 4, 4],
        mb: [2, 4, 4],
        pl: [4, 4, "64px"],
        pr: [4, 4, 0],
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}
