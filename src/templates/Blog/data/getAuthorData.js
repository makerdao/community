// @flow

import allContributors from '@content/all-contributors.json';

type TAuthor = {
  login: string,
  name: string,
  avatar_url?: string,
  profile?: string,
  contributions?: Array<string>,
};
/* 
	Get's the author data object from all-contributors json
	OR just returns an object with the name of the author.
*/
export function getAuthorData(_author: string): TAuthor {
  return (
    allContributors.contributors.find(
      (n) => n.login && n.login === _author.replace(/@/g, '')
    ) || { name: _author } //<- Incase someone puts an @ symbol in their entry
  );
}
