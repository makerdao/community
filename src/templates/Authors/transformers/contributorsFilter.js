// @flow

import allContributorKeys from "../data/allContributorKeys";
import type { TContributorList } from "../types";

//1. Takes in Author data in the form of an array (contributors)
//2. Checks for prop filters based on contribution keys
//3. Filters authors if contribution filter is present.
//4. Returns contributors list

const { contributionKeys } = allContributorKeys;

export default function contributorsFilter(
  contributors: TContributorList,
  all: boolean,
  props: any
): TContributorList {
  if (contributors.length <= 0) {
    //If we have 0 contributers don't render anything.
    return [];
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
  const filteredContributors =
    contributionFilters.length <= 0
      ? contributors
      : contributors.filter(({ contributions }) =>
          contributions.every((c) => contributionFilters.includes(c))
        );

  return filteredContributors;
}
