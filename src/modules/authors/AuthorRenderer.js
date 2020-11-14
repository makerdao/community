/** @jsx jsx */
import { Children } from "react";
import { Grid, jsx } from "theme-ui";

import { ListElement, GridCell, MDXtoAuthor } from "@modules/authors";
import acKeys from "@modules/authors/allContributorKeys";
import allContributors from "@content/all-contributors.json";

const { contributionKeys } = acKeys;

const AuthorRenderer = ({
  list = false,
  all = false,
  contributions = true,
  noLinks = false,
  author,
  noUsername = false,
  children,
  ...props
}) => {
  const _children = Children.toArray(children);

  //Get Author Data from MDX Child elements.
  //See MDXtoAuthor.js on spec.
  const getAuthorDataFromChildren = () => {
    const authorData = MDXtoAuthor(_children, list);

    //If we still want to render allContributors, but we
    //also want to pass our own custom data. We concatenate it
    //to the end of the allContributor data.
    return all && allContributors.contributors
      ? renderAuthorData(allContributors.contributors.concat(authorData))
      : renderAuthorData(authorData);
  };

  //1. Takes in Author data in the form of an array (contributors)
  //2. Checks for prop filters based on contribution keys
  //3. Filters authors if contribution filter is present.
  //4. Renders a list element of grid cell depending on the presence
  //   of the "list" prop.
  const renderAuthorData = (contributors) => {
    if (contributors.length <= 0) {
      //If we have 0 contributers don't render anything.
      return null;
    }

    const propKeys = Object.keys(props); //Get prop keys
    //Check if any of our prop keys match allContributer keys
    const propsHasContributorKeys = contributionKeys.some((n) =>
      propKeys.includes(n)
    );

    //If we're rendering "all" contributers and we DONT have
    //a contributer key prop, don't pass any filters.
    //Else, pass the filter from the allContributerKeys
    const contributionFilters =
      all && !propsHasContributorKeys
        ? []
        : contributionKeys.filter((n) => propKeys.includes(n));

    //Filter our contributers if a contribution prop key is present.
    //Else just pass it unscathed.
    const _contributors =
      contributionFilters.length <= 0
        ? contributors
        : contributors.filter(({ contributions }) =>
            contributions.all((c) => contributionFilters.includes(c))
          );

    //Return either a list element or grid cell
    //depending on our rendering prop.
    return _contributors.map((data, index) =>
      list ? (
        <ListElement
          key={`list-author-${index}`}
          {...data}
          index={index}
          noLinks={noLinks}
          noUsername={noUsername}
          hideContributions={!contributions}
        />
      ) : (
        <GridCell
          key={`grid-author-${index}`}
          {...data}
          index={index}
          noLinks={noLinks}
          hideContributions={!contributions}
        />
      )
    );
  };

  //If the all prop is present AND
  //we have contributers in our data file AND
  //we DONT have children, pass the allContributer data.
  //ELSE get author contribution data from our mdx children
  // let specificAuthor = author && allContributors.contributers && !all ?
  let authorsToRender = null;

  if (all && allContributors.contributors && _children.length === 0) {
    authorsToRender = renderAuthorData(allContributors.contributors);
  } else if (!all && allContributors.contributors && author) {
    const specificAuthors = Array.isArray(author)
      ? author.map((a) =>
          allContributors.contributors.find(
            (n) => n.login && n.login === a.replace(/@/g, "")
          )
        )
      : allContributors.contributors.find(
          (n) => n.login && n.login === author.replace(/@/g, "")
        );
    authorsToRender = specificAuthors
      ? renderAuthorData([specificAuthors])
      : null;
  } else if (_children.length > 0) {
    authorsToRender = getAuthorDataFromChildren();
  }

  return (
    <Grid
      gap={0}
      columns={list ? 1 : [2, 4, 6]}
      sx={{
        borderLeft: !list ? "1px solid" : "unset",
        borderColor: "muted",
        gridRowGap: list ? "2rem" : "unset",
        marginBottom: "1rem",
      }}
    >
      {authorsToRender}
    </Grid>
  );
};

export default AuthorRenderer;
