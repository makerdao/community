/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { UrlConverter } = require("./src/build-utils");
const FALLBACK_LOCALE = "en";
//TODO(Rejon): Add in support for the case similar pages exist outside of the locale folders.
//			   We don't want to override pages at the top level if they exist.

//Create redirect fallbacks to default locales.
//ie If the user types /contribute and it exists in our default locale, take us to that page.
exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  const { data: pages } = await graphql(`
    query redirects {
      pages: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `);

  pages.pages.edges.map(({ node }) => {
    const noLocalePath = UrlConverter(node)
      .replace(/^\/([\w]{2})\//, "/")
      .replace("index", "");

    createRedirect({
      fromPath: noLocalePath,
      toPath: `/${FALLBACK_LOCALE}${noLocalePath}`,
      isPermanent: true,
    });
  });

  //Legacy Redirect Fix
  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs",
    toPath: `/${FALLBACK_LOCALE}/faqs/`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/",
    toPath: `/${FALLBACK_LOCALE}/faqs/`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/dsr",
    toPath: `/${FALLBACK_LOCALE}/learn/Dai/dsr`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/vault",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults`,
  });

  createRedirect({
    fromPath: "/makerdao-scd-faqs/scd-faqs/stability-fee",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults/stability-fees`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/liquidation",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults/liquidation`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/stability-fee",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults/stability-fees`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/dai",
    toPath: `/${FALLBACK_LOCALE}/learn/Dai`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/mkr-token",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/mkr-token`,
  });

  createRedirect({
    fromPath: "/makerdao-scd-faqs/scd-faqs/liquidation",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults/liquidation`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/oracles",
    toPath: `/${FALLBACK_LOCALE}/learn/Oracles`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/emergency-shutdown",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/emergency-shutdown`,
  });

  createRedirect({
    fromPath: "/makerdao-mcd-faqs/faqs/glossary",
    toPath: `/${FALLBACK_LOCALE}/learn/faqs/glossary`,
  });

  createRedirect({
    fromPath: "/governance",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/`,
  });

  createRedirect({
    fromPath: "/governance/governance-risk-framework",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/gov-risk-framework/`,
  });

  createRedirect({
    fromPath: "/contributing",
    toPath: `/${FALLBACK_LOCALE}/contribute/`,
  });

  createRedirect({
    fromPath: "/grants",
    toPath: `/${FALLBACK_LOCALE}/funding/development-grants`,
  });

  createRedirect({
    fromPath: "/meetups",
    toPath: `/${FALLBACK_LOCALE}/funding/meetup-funding`,
  });

  createRedirect({
    fromPath: "/meetups/requesting-funds",
    toPath: `/${FALLBACK_LOCALE}/funding/meetup-funding`,
  });

  createRedirect({
    fromPath: "/hackathons",
    toPath: `/${FALLBACK_LOCALE}/funding/hackathon-funding`,
  });

  createRedirect({
    fromPath: "/risk",
    toPath: `/${FALLBACK_LOCALE}/learn/collateral-and-risk/`,
  });

  createRedirect({
    fromPath: "/translations",
    toPath: `/${FALLBACK_LOCALE}/contribute/translations`,
  });

  createRedirect({
    fromPath: "/onboarding",
    toPath: `/${FALLBACK_LOCALE}/learn`,
  });

  createRedirect({
    fromPath: "/onboarding/vault-onboarding",
    toPath: `/${FALLBACK_LOCALE}/learn/vaults/vaults-tutorial`,
  });

  createRedirect({
    fromPath: "/onboarding/voter-onboarding",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/how-voting-works`,
  });

  createRedirect({
    fromPath: "/governance/governance",
    toPath: `/${FALLBACK_LOCALE}/learn/governance`,
  });

  createRedirect({
    fromPath: "/governance/governance-risk-framework/part-one",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/gov-risk-framework/`,
  });

  createRedirect({
    fromPath: "/governance/common-topics",
    toPath: `/${FALLBACK_LOCALE}/learn/governance/common-topics`,
  });

  createRedirect({
    fromPath: "/governance/core-principles",
    toPath: `/${FALLBACK_LOCALE}/learn/MakerDAO/core-principles`,
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // inject breadcrumbs into page context
  const { context: oldPageContext } = page;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...oldPageContext,
      pagePath: page.path, //NOTE(Rejon): I provide this so we can have a navigational anchor during static builds for pathDirs and sidenav/breadcrumb data.
    },
  });
};
