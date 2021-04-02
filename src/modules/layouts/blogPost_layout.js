/** @jsx jsx */

import isArray from "lodash/isArray";
import { BlogAuthor, BlogCard, BlogContributors } from "@modules/blog";
import { useTranslation } from "@modules/localization";
import { Button, Divider } from "@modules/ui";
import { Heading } from "@modules/ui/heading";
import { SEO } from "@modules/utility";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Flex, jsx } from "theme-ui";

///MDX Layout for POSTs
export default ({ children, pageContext }) => {
  const {
    title,
    description,
    keywords, //<- Seo
    authors,
    date,
    image,
    recommend,
  } = pageContext.frontmatter;

  const { t } = useTranslation();

  const { blogPosts, siteContent } = useStaticQuery(graphql`
    query blogPostRecommendations {
      #Regex for all blog posts
      blogPosts: allMdx(
        filter: { fileAbsolutePath: { regex: "//blogPosts/" } }
      ) {
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
      siteContent: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "/content/([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 200)
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
              description
              order
            }
          }
        }
      }
    }
  `);

  const hasContributors = isArray(authors) && authors.length > 1;
  const contributors = hasContributors ? authors.slice(1, authors.length) : [];

  const pagePathSplit = pageContext.pagePath
    .split("/")
    .splice(1, pageContext.pagePath.split("/").length - 2);
  const typeIndex = pagePathSplit.indexOf("blog") + 1;

  //Split absolute path up to blog, get directory AFTER blog.
  let postType =
    typeIndex !== pagePathSplit.length - 1
      ? pagePathSplit[typeIndex]
      : "general";

  let postImage = null;

  if (image === null || image === undefined) {
    postImage = `/images/blog_headers/${postType}_1.png`; //will be general image 1
  } else {
    if (isNaN(parseInt(image))) {
      //Not a number, but a string. Expect entire src url
      postImage = image;
    } else {
      postImage = `/images/blog_headers/${postType}_${image}.png`;
    }
  }

  const otherPosts = recommend
    ?.map((rec) => {
      //Run through recommendation map for blog post recommendations
      return blogPosts.edges.filter(({ node }) =>
        node.fileAbsolutePath.includes(rec)
      )[0];
    })
    .concat(
      recommend?.map((rec) => {
        //Concat recommendations for all other site content.
        return siteContent.edges.filter(({ node }) =>
          node.fileAbsolutePath.includes(rec)
        )[0];
      })
    )
    .filter((el) => el !== undefined); //Filter out empty array/undefined runs of recommend.

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
        <Button outline icon="chevron_left" to="/blog">
          {t("Back_To_Blog")}
        </Button>

        <Heading level={1}>{title}</Heading>

        {authors ? (
          <BlogAuthor
            sx={{ mb: "16px" }}
            authors={authors}
            date={date}
            isDefaultLocale={true}
          />
        ) : null}

        <img
          src={postImage}
          sx={{
            width: "100%",
            objectFit: "cover",
            maxHeight: "478px",
            mb: "48px",
          }}
        />

        <div
          sx={{
            "& > *:first-of-type": {
              mt: 0,
            },
          }}
        >
          {children}
        </div>
      </ContentBlock>

      {hasContributors ? (
        <Box sx={{ pl: [4, 4, "64px"], pr: [4, 4, 0], mt: 2, mb: 2 }}>
          <Divider />
        </Box>
      ) : null}

      {hasContributors ? (
        <ContentBlock>
          <h2 sx={{ fontWeight: "500", fontSize: "32px" }}> Contributors </h2>
          <p sx={{ mb: "40px" }}>
            This article is possible with a little help from friends.
          </p>
          <BlogContributors contributors={contributors} />
        </ContentBlock>
      ) : null}

      {recommendations ? (
        <Box sx={{ pl: [4, 4, "64px"], pr: [4, 4, 0], mt: 4, mb: 2 }}>
          <Divider />
        </Box>
      ) : null}

      {recommendations ? (
        <Box
          sx={{
            width: ["100%", "100%", "90%"],
            m: "0 auto",
            mt: [2, 4, 4],
            mb: [2, 4, 4],
            pl: [4, 4, 0],
            pr: [4, 4, 0],
            position: "relative",
          }}
        >
          <h2 sx={{ mb: "66px", fontWeight: "500", fontSize: "32px" }}>
            {" "}
            Read More{" "}
          </h2>
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
        </Box>
      ) : null}
    </Flex>
  );
};

function ContentBlock({ children }) {
  return (
    <Box
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
