// @flow

export type TContributorKeys = {
    files: Array<string>,
    imageSize: number,
    commit: boolean,
    contributors: TContributorList,
    contributorsPerLine: number,
    projectName: string,
    projectOwner: string,
    repoType: string,
    repoHost: string,
    skipCi: boolean,
}

export type TContributor = {|
    login: string,
    name: string,
    avatar_url: string,
    profile: string,
    contributions: Array<string>
|}

export type TContributorList = Array<TContributor>