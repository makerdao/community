/** @jsx jsx */
import { Children, Fragment } from "react";
import { Box, Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

import { MobileNav } from "@modules/navigation";
import { useTranslation } from "@modules/localization/";
import { LanguageSelector } from "@modules/localization";
import { Sidenav, Breadcrumbs } from "@modules/navigation";
import { StatusBanner } from "@modules/ui";
import calculateTreeData from "@modules/navigation/calculateTreeData";
import { SEO } from "@modules/utility";
import { UrlConverter, getLocaleFromPath } from "@utils";

export default (props) => {
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  const { allMdx } = useStaticQuery(graphql`
    query getMDXData {
      # Regex for all files that are NOT config files
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
              order
            }
          }
        }
      }
    }
  `);

  const { children, pageContext, uri } = props;

  const { pagePath } = pageContext;
  const {
    title,
    description,
    keywords,
    featuredImage,
    status,
    hideLanguageSelector,
    hideBreadcrumbs,
  } = pageContext.frontmatter;

  const pathDirs = pagePath
    .replace(/^\/|\/$/g, "")
    .split("/")
    .slice(1);
  const urlNoLocale = pathDirs.join("/");

  const { sidenavData, breadcrumbData } = calculateTreeData(
    allMdx.edges,
    pathDirs[0],
    DEFAULT_LOCALE,
    locale,
    pathDirs
  );

  //NOTE(Rejon): Must be in the shape that React Select expects for it's options.
  //Something that can be queried?
  const languageSelectorData = allMdx.edges
    .filter(({ node }) => {
      //Drop the end slash, remove the locale, compare the string
      //TODO(Rejon): This works for now, but can probably be optimized with a Regex solution.
      const nodeURL = UrlConverter(node)
        .replace(/^\/|\/$/g, "")
        .split("/")
        .slice(1)
        .join("/");

      return (
        nodeURL === urlNoLocale &&
        getLocaleFromPath(node.fileAbsolutePath) !== locale
      );
    })
    .map(({ node }) => ({
      value: UrlConverter(node),
      label: t(
        "Language",
        null,
        null,
        getLocaleFromPath(node.fileAbsolutePath)
      ),
    }));

  const statusProps =
    typeof status === "object"
      ? { children: status.text, ...status }
      : { children: status };

  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentTopSection = path[2];

  //For the sake of SEO we may want the page title to be based on the first h1 in our MDX file.
  //if no title is specified in the metadata.
  const getFirstHeading = () => {
    //NOTE(Rejon): The children of layouts provided are MDX components!
    //Find the first mdx child that's an H1
    const firstHeading = Children.toArray(children).find(
      (c) => c.props.mdxType === "h1"
    );

    //If we have an h1 in our file return it.
    if (firstHeading !== undefined) {
      return firstHeading.props.children;
    }

    return undefined;
  };

  //SEO page title priority is: frontmatter title -> First H1 in mdx -> Filename fallback from uri
  //NOTE(Rejon): If the page is an index of a directory, the uri split will be the name of the directory. ie. /en/bounties -> bounties
  const _pageTitle = title || getFirstHeading() || uri.split("/").pop();

  const hasTopSection =
    currentTopSection !== undefined && currentTopSection !== "";

  const renderSidenav =
    pageContext.frontmatter &&
    !pageContext.frontmatter.hideSidenav &&
    hasTopSection;
  const renderLanguageSelector = hasTopSection && !hideLanguageSelector;
  const renderBreadcrumbs =
    !hideBreadcrumbs || (hasTopSection && !hideLanguageSelector);

  const seo = {
    title: _pageTitle,
    description,
    keywords,
    featuredImage,
  };

  let contentWidthSubtract = renderLanguageSelector ? 234 : 0; //NOTE(Rejon): Based on word from design, language selector being hidden doesn't change content width.

  if (renderSidenav) {
    contentWidthSubtract += 256;
  }

  return (
    <Fragment>
      {renderSidenav && (
        <Box
          sx={{
            width: "256px",
            display: ["none", "none", "initial"],
          }}
        >
          <Sticky
            boundaryElement=".content-boundary"
            dontUpdateHolderHeightWhenSticky={true}
            style={{ position: "relative" }}
            hideOnBoundaryHit={false}
            sx={{ display: ["none", "none", "initial"] }}
          >
            <Sidenav data={sidenavData} currentPath={pagePath} />
          </Sticky>
        </Box>
      )}
      <Box
        as="article"
        sx={{
          width: ["100%", "100%", `calc(100% - ${contentWidthSubtract}px)`],
          mt: hasTopSection ? [4, 4, "64px"] : 0,
          pl: hasTopSection ? [4, 4, "64px"] : 0,
          pr: hasTopSection ? [4, 4, 0] : 0,
          pb: 4,
        }}
      >
        <SEO {...seo} />

        {status && (
          <Box sx={{ marginTop: hasTopSection ? 2 : 0 }}>
            <StatusBanner sticky {...statusProps} sx={{ width: "100%" }} />
          </Box>
        )}
        {renderBreadcrumbs && (
          <Flex
            sx={{
              justifyContent: "space-between",
              position: "relative",
              alignItems: "flex-start",
              flexWrap: ["wrap", "wrap", "unset"],
              px: !hasTopSection ? [3, 3, 0] : 0,
            }}
          >
            <Breadcrumbs data={breadcrumbData} pathDirs={pathDirs} />
          </Flex>
        )}
        <Box sx={{ display: ["block", "block", "none"] }}>
          {/* MOBILE LANGUAGE SELECTOR */}
          {renderLanguageSelector && (
            <LanguageSelector data={languageSelectorData} pagePath={pagePath} />
          )}
        </Box>
        <Box>{children}</Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        {/* DESKTOP LANGUAGE SELECTOR */}
        {renderLanguageSelector && (
          <LanguageSelector
            sx={{ display: ["none", "none", "block"] }}
            data={languageSelectorData}
            pagePath={pagePath}
          />
        )}
      </Box>
      <MobileNav sidenavData={sidenavData} />
    </Fragment>
  );
};
