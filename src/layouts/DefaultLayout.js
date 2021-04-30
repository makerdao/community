// @flow
/** @jsx jsx */

import { Box, Flex, jsx } from 'theme-ui';
import { Breadcrumbs, LanguageSelector, MobileNav, Sidenav } from '@molecules';
import { Children, Fragment } from 'react';
import { UrlConverter, getLocaleFromPath } from '@utils';
import { graphql, useStaticQuery } from 'gatsby';

import type { Node } from 'react';
import { SEO } from '@modules/utility';
import { StatusBanner } from '@atoms';
import Sticky from 'react-sticky-el';
import { calculateTreeData } from '@modules/navigation';
import { useLocation } from '@reach/router';
import { useTranslation } from '@modules/localization/';

type TDefaultLayoutProps = {
  children: Node,
  pageContext: TGatsbyTypes_SitePageContext,
  uri: string,
};

export default function DefaultLayout({
  children,
  pageContext,
  uri,
}: TDefaultLayoutProps): Node {
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  const { allMdx } = useStaticQuery<TGatsbyTypes_getMDXDataQuery>(MDXDataQuery);

  const { pagePath } = pageContext;

  /* 
    TODO: Investigate origin of isCorePage, status and hideSidenav since these types are not being generated.
    Apparently they were never used in a mdx file, perhaps we need an example mdx file with all possible frontmatter fields
  */
  const {
    title,
    description,
    keywords,
    featuredImage,
    status,
    hideLanguageSelector,
    hideBreadcrumbs,
    isCorePage,
    hideSidenav,
  }: any = pageContext.frontmatter || {};

  //Core Pages store their own layout and functionality. Ignore everything and just return the children.
  if (isCorePage) {
    return <Fragment>{children}</Fragment>;
  }

  const pagePAthSplitted = pagePath?.replace(/^\/|\/$/g, '').split('/') || [];
  const pathDirs = pagePAthSplitted.slice(1);
  const urlNoLocale = pathDirs.join('/');

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
        .replace(/^\/|\/$/g, '')
        .split('/')
        .slice(1)
        .join('/');

      return (
        nodeURL === urlNoLocale &&
        getLocaleFromPath(node.fileAbsolutePath) !== locale
      );
    })
    .map(({ node }) => ({
      value: UrlConverter(node),
      label: t(
        'Language',
        null,
        null,
        getLocaleFromPath(node.fileAbsolutePath)
      ),
    }));

  const statusProps =
    typeof status === 'object'
      ? { children: status.text, ...status }
      : { children: status };

  const { pathname } = useLocation();
  const path = pathname.split('/');
  const currentTopSection = path[2];

  //For the sake of SEO we may want the page title to be based on the first h1 in our MDX file.
  //if no title is specified in the metadata.
  const getFirstHeading = () => {
    //NOTE(Rejon): The children of layouts provided are MDX components!
    //Find the first mdx child that's an H1
    const firstHeading = Children.toArray(children).find(
      (c) => c.props.mdxType === 'h1'
    );

    //If we have an h1 in our file return it.
    if (firstHeading !== undefined) {
      return firstHeading.props.children;
    }

    return undefined;
  };

  //SEO page title priority is: frontmatter title -> First H1 in mdx -> Filename fallback from uri
  //NOTE(Rejon): If the page is an index of a directory, the uri split will be the name of the directory. ie. /en/bounties -> bounties
  const _pageTitle = title || getFirstHeading() || uri.split('/').pop();

  const hasTopSection =
    currentTopSection !== undefined && currentTopSection !== '';

  const renderSidenav = !hideSidenav && hasTopSection;
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
            width: '256px',
            display: ['none', 'none', 'initial'],
          }}
        >
          <Sticky
            boundaryElement=".content-boundary"
            dontUpdateHolderHeightWhenSticky={true}
            style={{ position: 'relative' }}
            hideOnBoundaryHit={false}
            sx={{ display: ['none', 'none', 'initial'] }}
          >
            <Sidenav data={sidenavData} currentPath={pagePath} />
          </Sticky>
        </Box>
      )}
      <Box
        as="article"
        sx={{
          width: ['100%', '100%', `calc(100% - ${contentWidthSubtract}px)`],
          mt: hasTopSection ? [4, 4, '64px'] : 0,
          pl: hasTopSection ? [4, 4, '64px'] : 0,
          pr: hasTopSection ? [4, 4, 0] : 0,
          pb: 4,
        }}
      >
        <SEO {...seo} />

        {status && (
          <Box sx={{ marginTop: hasTopSection ? 2 : 0 }}>
            <StatusBanner sticky {...statusProps} sx={{ width: '100%' }} />
          </Box>
        )}
        {renderBreadcrumbs && (
          <Flex
            sx={{
              justifyContent: 'space-between',
              position: 'relative',
              alignItems: 'flex-start',
              flexWrap: ['wrap', 'wrap', 'unset'],
              px: !hasTopSection ? [3, 3, 0] : 0,
            }}
          >
            <Breadcrumbs data={breadcrumbData} pathDirs={pathDirs} />
          </Flex>
        )}
        <Box sx={{ display: ['block', 'block', 'none'] }}>
          {/* MOBILE LANGUAGE SELECTOR */}
          {renderLanguageSelector && (
            <LanguageSelector data={languageSelectorData} pagePath={pagePath} />
          )}
        </Box>
        <Box>{children}</Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        {/* DESKTOP LANGUAGE SELECTOR */}
        {renderLanguageSelector && (
          <LanguageSelector
            sx={{ display: ['none', 'none', 'block'] }}
            data={languageSelectorData}
            pagePath={pagePath}
          />
        )}
      </Box>
      <MobileNav sidenavData={sidenavData} />
    </Fragment>
  );
}

const MDXDataQuery = graphql`
  query getMDXData {
    # Regex for all files that are NOT config files
    allMdx(
      filter: {
        fileAbsolutePath: {
          regex: "/content/([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
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
`;
