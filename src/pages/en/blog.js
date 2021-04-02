/** @jsx jsx */

import queryString from "query-string";
import { BlogCard, BlogResult } from "@modules/blog";
import { useTranslation } from "@modules/localization";
import { Link, MobileNav } from "@modules/navigation";
import { Button, Select } from "@modules/ui";
import { useLocation } from "@reach/router";
import { useNavigate } from "@reach/router";
import { getBlogPostTypeFromPath } from "@utils";
import { graphql } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { useEffect, useState } from "react";
import { Flex, jsx } from "theme-ui";

const postsPerPage = 4;

const BlogHome = ({ data }) => {
  const { search } = useLocation();
  const { t, locale } = useTranslation();
  const navigate = useNavigate();

  const initialSection = queryString.parse(search).section || null;
  const [types] = useState(
    data.allMdx.edges
      .map(({ node }) => getBlogPostTypeFromPath(node.fileAbsolutePath))
      .filter((value, index, self) => {
        return self.indexOf(value) === index && value !== null;
      })
  );

  const initialSectionExists =
    types.length > 0 ? types.indexOf(initialSection) !== -1 : false; //NOTE(Rejon): Checks if the section provided in query string actually exists.

  const latestPosts =
    initialSection !== null && initialSectionExists
      ? data.allMdx.edges
          .filter(
            ({ node }) =>
              getBlogPostTypeFromPath(node.fileAbsolutePath) === initialSection
          )
          .slice(0, 3)
      : types.length > 0
      ? types.map((type) =>
          data.allMdx.edges.find(
            ({ node }) =>
              getBlogPostTypeFromPath(node.fileAbsolutePath) === type
          )
        )
      : data.allMdx.edges.slice(0, 3);

  const [sectionData, setSectionData] = useState({
    type: initialSectionExists ? initialSection : null,
    allPosts:
      initialSection !== null && initialSectionExists
        ? data.allMdx.edges.filter(
            ({ node }) =>
              getBlogPostTypeFromPath(node.fileAbsolutePath) === initialSection
          )
        : data.allMdx.edges.filter(
            ({ node }) =>
              latestPosts.find((fNode) => node.id === fNode.node.id) ===
              undefined
          ),
    latestPosts,
    currentPage: 0,
  });

  const availableLanguages = data.allSitePage.nodes.map(
    ({ path }) => path.split("/")[1]
  );

  const onSelectChange = ({ value, label }) => {
    //Update local storage on switch
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", value.split("/")[1]);
    }

    //Google Analytics Tracking
    trackCustomEvent({
      category: "Language Selector",
      action: `Switch Blog Language to ${label}`,
      label: `From Page: (${locale}) |  To Page: ${value} (${
        value.split("/")[1]
      })`,
    });

    navigate(value);
  };

  useEffect(() => {
    //Update the data and local type if we click one of the category tags via link
    if (initialSection !== null && sectionData.type !== initialSection) {
      setBlogCategory(initialSection);
    }
    //If we go back to the blog index page without query params, but our state isn't up to spec, update it.
    else if (initialSection === null && sectionData.type !== null) {
      setBlogCategory(null);
    }
  }, [initialSection]);

  //Whether to show pagination button or not.
  const showNextButton =
    (sectionData.currentPage + 1) * postsPerPage < sectionData.allPosts.length;

  const setBlogCategory = (cat = null) => {
    let allPosts = [...data.allMdx.edges]; //Spread it so we don't edit the original data.
    let latestPosts = [];

    if (cat === null) {
      //User clicked "Home"
      latestPosts =
        types.length > 0
          ? types.map((type) =>
              allPosts.find(({ node }, index) => {
                const hasType =
                  getBlogPostTypeFromPath(node.fileAbsolutePath) === type;

                if (hasType) {
                  allPosts.splice(index, 1);
                }

                return hasType;
              })
            )
          : allPosts.splice(0, 3);
    } else {
      allPosts = data.allMdx.edges.filter(
        ({ node }) => getBlogPostTypeFromPath(node.fileAbsolutePath) === cat
      ); //allBlogPosts of a specific type
      latestPosts = allPosts.splice(0, 3);
    }

    setSectionData({
      type: cat,
      allPosts,
      latestPosts,
      currentPage: 0,
    });
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        mt: [0, 0, "128px"],
        width: "100%",
        px: ["22px", "22px", "12.3%"],
      }}
    >
      {availableLanguages.length > 1 && (
        <div
          sx={{
            width: "100%",
            mt: 4,
            mb: "42px",
            display: ["block", "block", "none"],
          }}
        >
          <Select
            onChange={onSelectChange}
            options={availableLanguages.map((loc) => {
              return {
                value: `/${loc}/blog`,
                label: t("Language", null, null, loc),
              };
            })}
            aria-label={t("Blog_Language_Selector")}
            value={{
              value: `/${locale}`,
              label: t("Language"),
            }}
          />
        </div>
      )}

      <h1
        sx={{
          mt: [4, 4, 0],
          fontWeight: 500,
          fontSize: "48px",
          mb: ["66px", "50px", "50px"],
          textAlign: "center",
        }}
      >
        {t("Maker_Community_Blog")}
      </h1>

      <Flex
        sx={{
          mb: ["70px", "70px", "98px"],
          "& > *:not(:last-child)": {
            mr: "64px",
          },
          display: ["none", "flex", "flex"],
        }}
      >
        <Link
          sx={{
            color: sectionData.type === null ? "link" : "mutedAlt",
            cursor: "pointer",
            transition: "all .16s",
            fontWeight: 400,
            "&:hover": {
              color: "linkAlt",
            },
          }}
          partiallyActive={false}
          activeClassName={"null"}
          to={"/blog"}
          onClick={() => setBlogCategory(null)}
        >
          {t("Home")}
        </Link>
        {types.map((type, index) => (
          <Link
            sx={{
              color: sectionData.type === type ? "link" : "mutedAlt",
              cursor: "pointer",
              transition: "all .16s",
              fontWeight: 400,
              textTransform: "capitalize",
              "&:hover": {
                color: "linkAlt",
              },
            }}
            to={`/blog?section=${type}`}
            key={`blogPost-type-${index}`}
            onClick={() => setBlogCategory(type)}
          >
            {t(type)}
          </Link>
        ))}
      </Flex>

      <Flex
        sx={{
          justifyContent: "space-evenly",
          width: "100%",
          mb: [0, "80px", "80px"],
          flexDirection: ["column", "row", "row"],
        }}
      >
        {sectionData.latestPosts.map(({ node }, index) => (
          <BlogCard isLatest {...node} key={`blog-card-latest-${index}`} />
        ))}
      </Flex>

      <Flex
        sx={{
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            flex: 1,
            mb: "48px",
          }}
        >
          {sectionData.allPosts
            .slice(0, postsPerPage * (1 + sectionData.currentPage))
            .map(({ node }, index) => (
              <BlogResult {...node} key={`blog-result-${index}`} />
            ))}
        </Flex>

        <div
          sx={{ pt: "24px", ml: "12.3%", display: ["none", "none", "initial"] }}
        >
          <p sx={{ textTransform: "uppercase" }}>{t("LANGUAGES")}</p>

          <ul
            sx={{
              listStyleType: "none",
              p: 0,
            }}
          >
            {availableLanguages.map((loc, index) => (
              <li key={`available-blog-lang-${index}`}>
                <Link to={`/${loc}/blog`}>
                  {t("Language", null, null, loc)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Flex>
      {showNextButton && (
        <div sx={{ mb: ["50px", "50px", "114px"] }}>
          <Button
            outline
            icon="plus"
            sx={{ mr: 0 }}
            onClick={() => {
              setSectionData({
                ...sectionData,
                currentPage: sectionData.currentPage + 1,
              });
            }}
          >
            {t("See_More_Posts")}
          </Button>
        </div>
      )}
      <MobileNav blogData={types} />
    </Flex>
  );
};

//NOTE(Rejon): Change the name of this query when adding new locales!!!
//		       ie. BlogHomeQueryEN -> BlogHomeQueryES
export const query = graphql`
	query BlogHomeQueryEN($regex: String, $locale: String) {
		allMdx(filter: {fileAbsolutePath: {regex: $regex}}, sort: {fields: frontmatter___date, order: DESC}) {
			edges {
			node {
				fileAbsolutePath
				excerpt(truncate: true, pruneLength: 200)
				frontmatter {
				title
				image
				date(formatString: "MMMM DD, YYYY", locale: $locale)
				description
				authors
				}
				mdxAST
				id
			}
			}
		}
		allSitePage(filter: {path: {regex: "/\/([\\w]{2})\/blog\/$/"}}) {
			nodes {
			path
			}
		}
	}
 `;

export default BlogHome;
