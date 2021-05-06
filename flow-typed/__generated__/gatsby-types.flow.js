/* eslint-disable */

// @flow

/** All built-in and custom scalars, mapped to their actual values */
declare type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: string,
  JSON: any,
|};











declare type TGatsbyTypes_BooleanQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Boolean'>,
  ne?: ?$ElementType<Scalars, 'Boolean'>,
  in?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
|};

declare type TGatsbyTypes_ContentJson = {|
  ...TGatsbyTypes_Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +files?: ?Array<?$ElementType<Scalars, 'String'>>,
    +imageSize?: ?$ElementType<Scalars, 'Int'>,
    +commit?: ?$ElementType<Scalars, 'Boolean'>,
    +contributors?: ?Array<?TGatsbyTypes_ContentJsonContributors>,
    +contributorsPerLine?: ?$ElementType<Scalars, 'Int'>,
    +projectName?: ?$ElementType<Scalars, 'String'>,
    +projectOwner?: ?$ElementType<Scalars, 'String'>,
    +repoType?: ?$ElementType<Scalars, 'String'>,
    +repoHost?: ?$ElementType<Scalars, 'String'>,
    +skipCi?: ?$ElementType<Scalars, 'Boolean'>,
  |}
|};

declare type TGatsbyTypes_ContentJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_ContentJsonEdge>,
  +nodes: Array<TGatsbyTypes_ContentJson>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_ContentJsonGroupConnection>,
|};


declare type TGatsbyTypes_ContentJsonConnection_distinctArgs = {|
  field: TGatsbyTypes_ContentJsonFieldsEnum,
|};


declare type TGatsbyTypes_ContentJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_ContentJsonFieldsEnum,
|};

declare type TGatsbyTypes_ContentJsonContributors = {|
  +login?: ?$ElementType<Scalars, 'String'>,
  +name?: ?$ElementType<Scalars, 'String'>,
  +avatar_url?: ?$ElementType<Scalars, 'String'>,
  +profile?: ?$ElementType<Scalars, 'String'>,
  +contributions?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

declare type TGatsbyTypes_ContentJsonContributorsFilterInput = {|
  login?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  avatar_url?: ?TGatsbyTypes_StringQueryOperatorInput,
  profile?: ?TGatsbyTypes_StringQueryOperatorInput,
  contributions?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_ContentJsonContributorsFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_ContentJsonContributorsFilterInput,
|};

declare type TGatsbyTypes_ContentJsonEdge = {|
  +next?: ?TGatsbyTypes_ContentJson,
  +node: TGatsbyTypes_ContentJson,
  +previous?: ?TGatsbyTypes_ContentJson,
|};

export const TGatsbyTypes_ContentJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  files: 'files',
  imageSize: 'imageSize',
  commit: 'commit',
  contributors: 'contributors',
  contributors___login: 'contributors.login',
  contributors___name: 'contributors.name',
  contributors___avatar_url: 'contributors.avatar_url',
  contributors___profile: 'contributors.profile',
  contributors___contributions: 'contributors.contributions',
  contributorsPerLine: 'contributorsPerLine',
  projectName: 'projectName',
  projectOwner: 'projectOwner',
  repoType: 'repoType',
  repoHost: 'repoHost',
  skipCi: 'skipCi'
});


declare type TGatsbyTypes_ContentJsonFieldsEnum = $Values<typeof TGatsbyTypes_ContentJsonFieldsEnumValues>;

declare type TGatsbyTypes_ContentJsonFilterInput = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  files?: ?TGatsbyTypes_StringQueryOperatorInput,
  imageSize?: ?TGatsbyTypes_IntQueryOperatorInput,
  commit?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  contributors?: ?TGatsbyTypes_ContentJsonContributorsFilterListInput,
  contributorsPerLine?: ?TGatsbyTypes_IntQueryOperatorInput,
  projectName?: ?TGatsbyTypes_StringQueryOperatorInput,
  projectOwner?: ?TGatsbyTypes_StringQueryOperatorInput,
  repoType?: ?TGatsbyTypes_StringQueryOperatorInput,
  repoHost?: ?TGatsbyTypes_StringQueryOperatorInput,
  skipCi?: ?TGatsbyTypes_BooleanQueryOperatorInput,
|};

declare type TGatsbyTypes_ContentJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_ContentJsonEdge>,
  +nodes: Array<TGatsbyTypes_ContentJson>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ContentJsonSortInput = {|
  fields?: ?Array<?ContentJsonFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};


declare type TGatsbyTypes_DateQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Date'>,
  ne?: ?$ElementType<Scalars, 'Date'>,
  gt?: ?$ElementType<Scalars, 'Date'>,
  gte?: ?$ElementType<Scalars, 'Date'>,
  lt?: ?$ElementType<Scalars, 'Date'>,
  lte?: ?$ElementType<Scalars, 'Date'>,
  in?: ?Array<?$ElementType<Scalars, 'Date'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Date'>>,
|};

declare type TGatsbyTypes_Directory = {|
  ...TGatsbyTypes_Node,
  ...{|
    +sourceInstanceName: $ElementType<Scalars, 'String'>,
    +absolutePath: $ElementType<Scalars, 'String'>,
    +relativePath: $ElementType<Scalars, 'String'>,
    +extension: $ElementType<Scalars, 'String'>,
    +size: $ElementType<Scalars, 'Int'>,
    +prettySize: $ElementType<Scalars, 'String'>,
    +modifiedTime: $ElementType<Scalars, 'Date'>,
    +accessTime: $ElementType<Scalars, 'Date'>,
    +changeTime: $ElementType<Scalars, 'Date'>,
    +birthTime: $ElementType<Scalars, 'Date'>,
    +root: $ElementType<Scalars, 'String'>,
    +dir: $ElementType<Scalars, 'String'>,
    +base: $ElementType<Scalars, 'String'>,
    +ext: $ElementType<Scalars, 'String'>,
    +name: $ElementType<Scalars, 'String'>,
    +relativeDirectory: $ElementType<Scalars, 'String'>,
    +dev: $ElementType<Scalars, 'Int'>,
    +mode: $ElementType<Scalars, 'Int'>,
    +nlink: $ElementType<Scalars, 'Int'>,
    +uid: $ElementType<Scalars, 'Int'>,
    +gid: $ElementType<Scalars, 'Int'>,
    +rdev: $ElementType<Scalars, 'Int'>,
    +ino: $ElementType<Scalars, 'Float'>,
    +atimeMs: $ElementType<Scalars, 'Float'>,
    +mtimeMs: $ElementType<Scalars, 'Float'>,
    +ctimeMs: $ElementType<Scalars, 'Float'>,
    +atime: $ElementType<Scalars, 'Date'>,
    +mtime: $ElementType<Scalars, 'Date'>,
    +ctime: $ElementType<Scalars, 'Date'>,
    +birthtime?: ?$ElementType<Scalars, 'Date'>,
    +birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    +blksize?: ?$ElementType<Scalars, 'Int'>,
    +blocks?: ?$ElementType<Scalars, 'Int'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
  |}
|};


declare type TGatsbyTypes_Directory_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_Directory_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_DirectoryConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_DirectoryEdge>,
  +nodes: Array<TGatsbyTypes_Directory>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_DirectoryGroupConnection>,
|};


declare type TGatsbyTypes_DirectoryConnection_distinctArgs = {|
  field: TGatsbyTypes_DirectoryFieldsEnum,
|};


declare type TGatsbyTypes_DirectoryConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_DirectoryFieldsEnum,
|};

declare type TGatsbyTypes_DirectoryEdge = {|
  +next?: ?TGatsbyTypes_Directory,
  +node: TGatsbyTypes_Directory,
  +previous?: ?TGatsbyTypes_Directory,
|};

export const TGatsbyTypes_DirectoryFieldsEnumValues = Object.freeze({
  sourceInstanceName: 'sourceInstanceName',
  absolutePath: 'absolutePath',
  relativePath: 'relativePath',
  extension: 'extension',
  size: 'size',
  prettySize: 'prettySize',
  modifiedTime: 'modifiedTime',
  accessTime: 'accessTime',
  changeTime: 'changeTime',
  birthTime: 'birthTime',
  root: 'root',
  dir: 'dir',
  base: 'base',
  ext: 'ext',
  name: 'name',
  relativeDirectory: 'relativeDirectory',
  dev: 'dev',
  mode: 'mode',
  nlink: 'nlink',
  uid: 'uid',
  gid: 'gid',
  rdev: 'rdev',
  ino: 'ino',
  atimeMs: 'atimeMs',
  mtimeMs: 'mtimeMs',
  ctimeMs: 'ctimeMs',
  atime: 'atime',
  mtime: 'mtime',
  ctime: 'ctime',
  birthtime: 'birthtime',
  birthtimeMs: 'birthtimeMs',
  blksize: 'blksize',
  blocks: 'blocks',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type'
});


declare type TGatsbyTypes_DirectoryFieldsEnum = $Values<typeof TGatsbyTypes_DirectoryFieldsEnumValues>;

declare type TGatsbyTypes_DirectoryFilterInput = {|
  sourceInstanceName?: ?TGatsbyTypes_StringQueryOperatorInput,
  absolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  extension?: ?TGatsbyTypes_StringQueryOperatorInput,
  size?: ?TGatsbyTypes_IntQueryOperatorInput,
  prettySize?: ?TGatsbyTypes_StringQueryOperatorInput,
  modifiedTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  accessTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  changeTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  root?: ?TGatsbyTypes_StringQueryOperatorInput,
  dir?: ?TGatsbyTypes_StringQueryOperatorInput,
  base?: ?TGatsbyTypes_StringQueryOperatorInput,
  ext?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativeDirectory?: ?TGatsbyTypes_StringQueryOperatorInput,
  dev?: ?TGatsbyTypes_IntQueryOperatorInput,
  mode?: ?TGatsbyTypes_IntQueryOperatorInput,
  nlink?: ?TGatsbyTypes_IntQueryOperatorInput,
  uid?: ?TGatsbyTypes_IntQueryOperatorInput,
  gid?: ?TGatsbyTypes_IntQueryOperatorInput,
  rdev?: ?TGatsbyTypes_IntQueryOperatorInput,
  ino?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  mtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  ctimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atime?: ?TGatsbyTypes_DateQueryOperatorInput,
  mtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  ctime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  blksize?: ?TGatsbyTypes_IntQueryOperatorInput,
  blocks?: ?TGatsbyTypes_IntQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};

declare type TGatsbyTypes_DirectoryGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_DirectoryEdge>,
  +nodes: Array<TGatsbyTypes_Directory>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_DirectorySortInput = {|
  fields?: ?Array<?DirectoryFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_DuotoneGradient = {|
  highlight: $ElementType<Scalars, 'String'>,
  shadow: $ElementType<Scalars, 'String'>,
  opacity?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_EnJson = {|
  ...TGatsbyTypes_Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +Bug_Report?: ?$ElementType<Scalars, 'String'>,
    +Go_Back?: ?$ElementType<Scalars, 'String'>,
    +Language?: ?$ElementType<Scalars, 'String'>,
    +Flag?: ?$ElementType<Scalars, 'String'>,
    +Search?: ?$ElementType<Scalars, 'String'>,
    +No_Results?: ?$ElementType<Scalars, 'String'>,
    +Home?: ?$ElementType<Scalars, 'String'>,
    +Page_Language_Selector?: ?$ElementType<Scalars, 'String'>,
    +Available_Languages?: ?$ElementType<Scalars, 'String'>,
    +LANGUAGES?: ?$ElementType<Scalars, 'String'>,
    +Available_Languages_none?: ?$ElementType<Scalars, 'String'>,
    +Need_Another_Language?: ?$ElementType<Scalars, 'String'>,
    +Join_translation_team?: ?$ElementType<Scalars, 'String'>,
    +Translations?: ?$ElementType<Scalars, 'String'>,
    +Touts?: ?TGatsbyTypes_EnJsonTouts,
    +Back_To_Main_Menu?: ?$ElementType<Scalars, 'String'>,
    +aria_MakerHomeIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_MakerFooterLogo?: ?$ElementType<Scalars, 'String'>,
    +aria_GithubIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_TwitterIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_MediumIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_YoutubeIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_WeChatIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_TelegramIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_RedditIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_RocketChatIcon?: ?$ElementType<Scalars, 'String'>,
    +aria_ExternalWebsite?: ?$ElementType<Scalars, 'String'>,
    +Forum?: ?$ElementType<Scalars, 'String'>,
    +Chat?: ?$ElementType<Scalars, 'String'>,
    +NotFoundPage?: ?TGatsbyTypes_EnJsonNotFoundPage,
    +Footer?: ?TGatsbyTypes_EnJsonFooter,
    +Blog?: ?$ElementType<Scalars, 'String'>,
    +Back_To_Blog?: ?$ElementType<Scalars, 'String'>,
    +Blog_Language_Selector?: ?$ElementType<Scalars, 'String'>,
    +editorial?: ?$ElementType<Scalars, 'String'>,
    +community?: ?$ElementType<Scalars, 'String'>,
    +governance?: ?$ElementType<Scalars, 'String'>,
    +Maker_Community_Blog?: ?$ElementType<Scalars, 'String'>,
    +Latest_In?: ?$ElementType<Scalars, 'String'>,
    +See_More_Posts?: ?$ElementType<Scalars, 'String'>,
  |}
|};

declare type TGatsbyTypes_EnJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_EnJsonEdge>,
  +nodes: Array<TGatsbyTypes_EnJson>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_EnJsonGroupConnection>,
|};


declare type TGatsbyTypes_EnJsonConnection_distinctArgs = {|
  field: TGatsbyTypes_EnJsonFieldsEnum,
|};


declare type TGatsbyTypes_EnJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_EnJsonFieldsEnum,
|};

declare type TGatsbyTypes_EnJsonEdge = {|
  +next?: ?TGatsbyTypes_EnJson,
  +node: TGatsbyTypes_EnJson,
  +previous?: ?TGatsbyTypes_EnJson,
|};

export const TGatsbyTypes_EnJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  Bug_Report: 'Bug_Report',
  Go_Back: 'Go_Back',
  Language: 'Language',
  Flag: 'Flag',
  Search: 'Search',
  No_Results: 'No_Results',
  Home: 'Home',
  Page_Language_Selector: 'Page_Language_Selector',
  Available_Languages: 'Available_Languages',
  LANGUAGES: 'LANGUAGES',
  Available_Languages_none: 'Available_Languages_none',
  Need_Another_Language: 'Need_Another_Language',
  Join_translation_team: 'Join_translation_team',
  Translations: 'Translations',
  Touts___alt_defaultImage: 'Touts.alt_defaultImage',
  Touts___alt_altImage: 'Touts.alt_altImage',
  Back_To_Main_Menu: 'Back_To_Main_Menu',
  aria_MakerHomeIcon: 'aria_MakerHomeIcon',
  aria_MakerFooterLogo: 'aria_MakerFooterLogo',
  aria_GithubIcon: 'aria_GithubIcon',
  aria_TwitterIcon: 'aria_TwitterIcon',
  aria_MediumIcon: 'aria_MediumIcon',
  aria_YoutubeIcon: 'aria_YoutubeIcon',
  aria_WeChatIcon: 'aria_WeChatIcon',
  aria_TelegramIcon: 'aria_TelegramIcon',
  aria_RedditIcon: 'aria_RedditIcon',
  aria_RocketChatIcon: 'aria_RocketChatIcon',
  aria_ExternalWebsite: 'aria_ExternalWebsite',
  Forum: 'Forum',
  Chat: 'Chat',
  NotFoundPage___seoTitle: 'NotFoundPage.seoTitle',
  NotFoundPage___line_1: 'NotFoundPage.line_1',
  NotFoundPage___line_2: 'NotFoundPage.line_2',
  NotFoundPage___line_3: 'NotFoundPage.line_3',
  Footer___Resources: 'Footer.Resources',
  Footer___Whitepaper: 'Footer.Whitepaper',
  Footer___FAQs: 'Footer.FAQs',
  Footer___Privacy_Policy: 'Footer.Privacy_Policy',
  Footer___Brand_Assets: 'Footer.Brand_Assets',
  Footer___Feeds: 'Footer.Feeds',
  Footer___Service_Status: 'Footer.Service_Status',
  Footer___Products: 'Footer.Products',
  Footer___Oasis: 'Footer.Oasis',
  Footer___Migrate: 'Footer.Migrate',
  Footer___Ecosystem: 'Footer.Ecosystem',
  Footer___Governance: 'Footer.Governance',
  Footer___Developers: 'Footer.Developers',
  Footer___Documentation: 'Footer.Documentation',
  Footer___Daijs: 'Footer.Daijs',
  Footer___Developer_Guides: 'Footer.Developer_Guides',
  Footer___Foundation: 'Footer.Foundation',
  Footer___Team: 'Footer.Team',
  Footer___Careers: 'Footer.Careers',
  Footer___Contact: 'Footer.Contact',
  Footer___Blog: 'Footer.Blog',
  Blog: 'Blog',
  Back_To_Blog: 'Back_To_Blog',
  Blog_Language_Selector: 'Blog_Language_Selector',
  editorial: 'editorial',
  community: 'community',
  governance: 'governance',
  Maker_Community_Blog: 'Maker_Community_Blog',
  Latest_In: 'Latest_In',
  See_More_Posts: 'See_More_Posts'
});


declare type TGatsbyTypes_EnJsonFieldsEnum = $Values<typeof TGatsbyTypes_EnJsonFieldsEnumValues>;

declare type TGatsbyTypes_EnJsonFilterInput = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  Bug_Report?: ?TGatsbyTypes_StringQueryOperatorInput,
  Go_Back?: ?TGatsbyTypes_StringQueryOperatorInput,
  Language?: ?TGatsbyTypes_StringQueryOperatorInput,
  Flag?: ?TGatsbyTypes_StringQueryOperatorInput,
  Search?: ?TGatsbyTypes_StringQueryOperatorInput,
  No_Results?: ?TGatsbyTypes_StringQueryOperatorInput,
  Home?: ?TGatsbyTypes_StringQueryOperatorInput,
  Page_Language_Selector?: ?TGatsbyTypes_StringQueryOperatorInput,
  Available_Languages?: ?TGatsbyTypes_StringQueryOperatorInput,
  LANGUAGES?: ?TGatsbyTypes_StringQueryOperatorInput,
  Available_Languages_none?: ?TGatsbyTypes_StringQueryOperatorInput,
  Need_Another_Language?: ?TGatsbyTypes_StringQueryOperatorInput,
  Join_translation_team?: ?TGatsbyTypes_StringQueryOperatorInput,
  Translations?: ?TGatsbyTypes_StringQueryOperatorInput,
  Touts?: ?TGatsbyTypes_EnJsonToutsFilterInput,
  Back_To_Main_Menu?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MakerHomeIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MakerFooterLogo?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_GithubIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_TwitterIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MediumIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_YoutubeIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_WeChatIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_TelegramIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_RedditIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_RocketChatIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_ExternalWebsite?: ?TGatsbyTypes_StringQueryOperatorInput,
  Forum?: ?TGatsbyTypes_StringQueryOperatorInput,
  Chat?: ?TGatsbyTypes_StringQueryOperatorInput,
  NotFoundPage?: ?TGatsbyTypes_EnJsonNotFoundPageFilterInput,
  Footer?: ?TGatsbyTypes_EnJsonFooterFilterInput,
  Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Back_To_Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Blog_Language_Selector?: ?TGatsbyTypes_StringQueryOperatorInput,
  editorial?: ?TGatsbyTypes_StringQueryOperatorInput,
  community?: ?TGatsbyTypes_StringQueryOperatorInput,
  governance?: ?TGatsbyTypes_StringQueryOperatorInput,
  Maker_Community_Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Latest_In?: ?TGatsbyTypes_StringQueryOperatorInput,
  See_More_Posts?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_EnJsonFooter = {|
  +Resources?: ?$ElementType<Scalars, 'String'>,
  +Whitepaper?: ?$ElementType<Scalars, 'String'>,
  +FAQs?: ?$ElementType<Scalars, 'String'>,
  +Privacy_Policy?: ?$ElementType<Scalars, 'String'>,
  +Brand_Assets?: ?$ElementType<Scalars, 'String'>,
  +Feeds?: ?$ElementType<Scalars, 'String'>,
  +Service_Status?: ?$ElementType<Scalars, 'String'>,
  +Products?: ?$ElementType<Scalars, 'String'>,
  +Oasis?: ?$ElementType<Scalars, 'String'>,
  +Migrate?: ?$ElementType<Scalars, 'String'>,
  +Ecosystem?: ?$ElementType<Scalars, 'String'>,
  +Governance?: ?$ElementType<Scalars, 'String'>,
  +Developers?: ?$ElementType<Scalars, 'String'>,
  +Documentation?: ?$ElementType<Scalars, 'String'>,
  +Daijs?: ?$ElementType<Scalars, 'String'>,
  +Developer_Guides?: ?$ElementType<Scalars, 'String'>,
  +Foundation?: ?$ElementType<Scalars, 'String'>,
  +Team?: ?$ElementType<Scalars, 'String'>,
  +Careers?: ?$ElementType<Scalars, 'String'>,
  +Contact?: ?$ElementType<Scalars, 'String'>,
  +Blog?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_EnJsonFooterFilterInput = {|
  Resources?: ?TGatsbyTypes_StringQueryOperatorInput,
  Whitepaper?: ?TGatsbyTypes_StringQueryOperatorInput,
  FAQs?: ?TGatsbyTypes_StringQueryOperatorInput,
  Privacy_Policy?: ?TGatsbyTypes_StringQueryOperatorInput,
  Brand_Assets?: ?TGatsbyTypes_StringQueryOperatorInput,
  Feeds?: ?TGatsbyTypes_StringQueryOperatorInput,
  Service_Status?: ?TGatsbyTypes_StringQueryOperatorInput,
  Products?: ?TGatsbyTypes_StringQueryOperatorInput,
  Oasis?: ?TGatsbyTypes_StringQueryOperatorInput,
  Migrate?: ?TGatsbyTypes_StringQueryOperatorInput,
  Ecosystem?: ?TGatsbyTypes_StringQueryOperatorInput,
  Governance?: ?TGatsbyTypes_StringQueryOperatorInput,
  Developers?: ?TGatsbyTypes_StringQueryOperatorInput,
  Documentation?: ?TGatsbyTypes_StringQueryOperatorInput,
  Daijs?: ?TGatsbyTypes_StringQueryOperatorInput,
  Developer_Guides?: ?TGatsbyTypes_StringQueryOperatorInput,
  Foundation?: ?TGatsbyTypes_StringQueryOperatorInput,
  Team?: ?TGatsbyTypes_StringQueryOperatorInput,
  Careers?: ?TGatsbyTypes_StringQueryOperatorInput,
  Contact?: ?TGatsbyTypes_StringQueryOperatorInput,
  Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_EnJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_EnJsonEdge>,
  +nodes: Array<TGatsbyTypes_EnJson>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_EnJsonNotFoundPage = {|
  +seoTitle?: ?$ElementType<Scalars, 'String'>,
  +line_1?: ?$ElementType<Scalars, 'String'>,
  +line_2?: ?$ElementType<Scalars, 'String'>,
  +line_3?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_EnJsonNotFoundPageFilterInput = {|
  seoTitle?: ?TGatsbyTypes_StringQueryOperatorInput,
  line_1?: ?TGatsbyTypes_StringQueryOperatorInput,
  line_2?: ?TGatsbyTypes_StringQueryOperatorInput,
  line_3?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_EnJsonSortInput = {|
  fields?: ?Array<?EnJsonFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_EnJsonTouts = {|
  +alt_defaultImage?: ?$ElementType<Scalars, 'String'>,
  +alt_altImage?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_EnJsonToutsFilterInput = {|
  alt_defaultImage?: ?TGatsbyTypes_StringQueryOperatorInput,
  alt_altImage?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_File = {|
  ...TGatsbyTypes_Node,
  ...{|
    +sourceInstanceName: $ElementType<Scalars, 'String'>,
    +absolutePath: $ElementType<Scalars, 'String'>,
    +relativePath: $ElementType<Scalars, 'String'>,
    +extension: $ElementType<Scalars, 'String'>,
    +size: $ElementType<Scalars, 'Int'>,
    +prettySize: $ElementType<Scalars, 'String'>,
    +modifiedTime: $ElementType<Scalars, 'Date'>,
    +accessTime: $ElementType<Scalars, 'Date'>,
    +changeTime: $ElementType<Scalars, 'Date'>,
    +birthTime: $ElementType<Scalars, 'Date'>,
    +root: $ElementType<Scalars, 'String'>,
    +dir: $ElementType<Scalars, 'String'>,
    +base: $ElementType<Scalars, 'String'>,
    +ext: $ElementType<Scalars, 'String'>,
    +name: $ElementType<Scalars, 'String'>,
    +relativeDirectory: $ElementType<Scalars, 'String'>,
    +dev: $ElementType<Scalars, 'Int'>,
    +mode: $ElementType<Scalars, 'Int'>,
    +nlink: $ElementType<Scalars, 'Int'>,
    +uid: $ElementType<Scalars, 'Int'>,
    +gid: $ElementType<Scalars, 'Int'>,
    +rdev: $ElementType<Scalars, 'Int'>,
    +ino: $ElementType<Scalars, 'Float'>,
    +atimeMs: $ElementType<Scalars, 'Float'>,
    +mtimeMs: $ElementType<Scalars, 'Float'>,
    +ctimeMs: $ElementType<Scalars, 'Float'>,
    +atime: $ElementType<Scalars, 'Date'>,
    +mtime: $ElementType<Scalars, 'Date'>,
    +ctime: $ElementType<Scalars, 'Date'>,
    +birthtime?: ?$ElementType<Scalars, 'Date'>,
    +birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    +blksize?: ?$ElementType<Scalars, 'Int'>,
    +blocks?: ?$ElementType<Scalars, 'Int'>,
    /** Copy file to static directory and return public url to it */
  +publicURL?: ?$ElementType<Scalars, 'String'>,
    +childImageSharp?: ?TGatsbyTypes_ImageSharp,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +childContentJson?: ?TGatsbyTypes_ContentJson,
    +childMdx?: ?TGatsbyTypes_Mdx,
    +childEnJson?: ?TGatsbyTypes_EnJson,
  |}
|};


declare type TGatsbyTypes_File_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_File_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_FileConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_FileEdge>,
  +nodes: Array<TGatsbyTypes_File>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_FileGroupConnection>,
|};


declare type TGatsbyTypes_FileConnection_distinctArgs = {|
  field: TGatsbyTypes_FileFieldsEnum,
|};


declare type TGatsbyTypes_FileConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_FileFieldsEnum,
|};

declare type TGatsbyTypes_FileEdge = {|
  +next?: ?TGatsbyTypes_File,
  +node: TGatsbyTypes_File,
  +previous?: ?TGatsbyTypes_File,
|};

export const TGatsbyTypes_FileFieldsEnumValues = Object.freeze({
  sourceInstanceName: 'sourceInstanceName',
  absolutePath: 'absolutePath',
  relativePath: 'relativePath',
  extension: 'extension',
  size: 'size',
  prettySize: 'prettySize',
  modifiedTime: 'modifiedTime',
  accessTime: 'accessTime',
  changeTime: 'changeTime',
  birthTime: 'birthTime',
  root: 'root',
  dir: 'dir',
  base: 'base',
  ext: 'ext',
  name: 'name',
  relativeDirectory: 'relativeDirectory',
  dev: 'dev',
  mode: 'mode',
  nlink: 'nlink',
  uid: 'uid',
  gid: 'gid',
  rdev: 'rdev',
  ino: 'ino',
  atimeMs: 'atimeMs',
  mtimeMs: 'mtimeMs',
  ctimeMs: 'ctimeMs',
  atime: 'atime',
  mtime: 'mtime',
  ctime: 'ctime',
  birthtime: 'birthtime',
  birthtimeMs: 'birthtimeMs',
  blksize: 'blksize',
  blocks: 'blocks',
  publicURL: 'publicURL',
  childImageSharp___fixed___base64: 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG: 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio: 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width: 'childImageSharp.fixed.width',
  childImageSharp___fixed___height: 'childImageSharp.fixed.height',
  childImageSharp___fixed___src: 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet: 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp: 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp: 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName: 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64: 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG: 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio: 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width: 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height: 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src: 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet: 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp: 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp: 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName: 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64: 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG: 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio: 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src: 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet: 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp: 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp: 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes: 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg: 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName: 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth: 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight: 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64: 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG: 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio: 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src: 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet: 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp: 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp: 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes: 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg: 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName: 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth: 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight: 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImage___imageData: 'childImageSharp.gatsbyImage.imageData',
  childImageSharp___original___width: 'childImageSharp.original.width',
  childImageSharp___original___height: 'childImageSharp.original.height',
  childImageSharp___original___src: 'childImageSharp.original.src',
  childImageSharp___resize___src: 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG: 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width: 'childImageSharp.resize.width',
  childImageSharp___resize___height: 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio: 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName: 'childImageSharp.resize.originalName',
  childImageSharp___id: 'childImageSharp.id',
  childImageSharp___parent___id: 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id: 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children: 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children: 'childImageSharp.parent.children',
  childImageSharp___parent___children___id: 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children: 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content: 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest: 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description: 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners: 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType: 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType: 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner: 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type: 'childImageSharp.parent.internal.type',
  childImageSharp___children: 'childImageSharp.children',
  childImageSharp___children___id: 'childImageSharp.children.id',
  childImageSharp___children___parent___id: 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children: 'childImageSharp.children.parent.children',
  childImageSharp___children___children: 'childImageSharp.children.children',
  childImageSharp___children___children___id: 'childImageSharp.children.children.id',
  childImageSharp___children___children___children: 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content: 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest: 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description: 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners: 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType: 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType: 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner: 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type: 'childImageSharp.children.internal.type',
  childImageSharp___internal___content: 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest: 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description: 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners: 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType: 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType: 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner: 'childImageSharp.internal.owner',
  childImageSharp___internal___type: 'childImageSharp.internal.type',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  childContentJson___id: 'childContentJson.id',
  childContentJson___parent___id: 'childContentJson.parent.id',
  childContentJson___parent___parent___id: 'childContentJson.parent.parent.id',
  childContentJson___parent___parent___children: 'childContentJson.parent.parent.children',
  childContentJson___parent___children: 'childContentJson.parent.children',
  childContentJson___parent___children___id: 'childContentJson.parent.children.id',
  childContentJson___parent___children___children: 'childContentJson.parent.children.children',
  childContentJson___parent___internal___content: 'childContentJson.parent.internal.content',
  childContentJson___parent___internal___contentDigest: 'childContentJson.parent.internal.contentDigest',
  childContentJson___parent___internal___description: 'childContentJson.parent.internal.description',
  childContentJson___parent___internal___fieldOwners: 'childContentJson.parent.internal.fieldOwners',
  childContentJson___parent___internal___ignoreType: 'childContentJson.parent.internal.ignoreType',
  childContentJson___parent___internal___mediaType: 'childContentJson.parent.internal.mediaType',
  childContentJson___parent___internal___owner: 'childContentJson.parent.internal.owner',
  childContentJson___parent___internal___type: 'childContentJson.parent.internal.type',
  childContentJson___children: 'childContentJson.children',
  childContentJson___children___id: 'childContentJson.children.id',
  childContentJson___children___parent___id: 'childContentJson.children.parent.id',
  childContentJson___children___parent___children: 'childContentJson.children.parent.children',
  childContentJson___children___children: 'childContentJson.children.children',
  childContentJson___children___children___id: 'childContentJson.children.children.id',
  childContentJson___children___children___children: 'childContentJson.children.children.children',
  childContentJson___children___internal___content: 'childContentJson.children.internal.content',
  childContentJson___children___internal___contentDigest: 'childContentJson.children.internal.contentDigest',
  childContentJson___children___internal___description: 'childContentJson.children.internal.description',
  childContentJson___children___internal___fieldOwners: 'childContentJson.children.internal.fieldOwners',
  childContentJson___children___internal___ignoreType: 'childContentJson.children.internal.ignoreType',
  childContentJson___children___internal___mediaType: 'childContentJson.children.internal.mediaType',
  childContentJson___children___internal___owner: 'childContentJson.children.internal.owner',
  childContentJson___children___internal___type: 'childContentJson.children.internal.type',
  childContentJson___internal___content: 'childContentJson.internal.content',
  childContentJson___internal___contentDigest: 'childContentJson.internal.contentDigest',
  childContentJson___internal___description: 'childContentJson.internal.description',
  childContentJson___internal___fieldOwners: 'childContentJson.internal.fieldOwners',
  childContentJson___internal___ignoreType: 'childContentJson.internal.ignoreType',
  childContentJson___internal___mediaType: 'childContentJson.internal.mediaType',
  childContentJson___internal___owner: 'childContentJson.internal.owner',
  childContentJson___internal___type: 'childContentJson.internal.type',
  childContentJson___files: 'childContentJson.files',
  childContentJson___imageSize: 'childContentJson.imageSize',
  childContentJson___commit: 'childContentJson.commit',
  childContentJson___contributors: 'childContentJson.contributors',
  childContentJson___contributors___login: 'childContentJson.contributors.login',
  childContentJson___contributors___name: 'childContentJson.contributors.name',
  childContentJson___contributors___avatar_url: 'childContentJson.contributors.avatar_url',
  childContentJson___contributors___profile: 'childContentJson.contributors.profile',
  childContentJson___contributors___contributions: 'childContentJson.contributors.contributions',
  childContentJson___contributorsPerLine: 'childContentJson.contributorsPerLine',
  childContentJson___projectName: 'childContentJson.projectName',
  childContentJson___projectOwner: 'childContentJson.projectOwner',
  childContentJson___repoType: 'childContentJson.repoType',
  childContentJson___repoHost: 'childContentJson.repoHost',
  childContentJson___skipCi: 'childContentJson.skipCi',
  childMdx___rawBody: 'childMdx.rawBody',
  childMdx___fileAbsolutePath: 'childMdx.fileAbsolutePath',
  childMdx___frontmatter___title: 'childMdx.frontmatter.title',
  childMdx___frontmatter___description: 'childMdx.frontmatter.description',
  childMdx___frontmatter___keywords: 'childMdx.frontmatter.keywords',
  childMdx___frontmatter___featuredImage: 'childMdx.frontmatter.featuredImage',
  childMdx___frontmatter___hideBreadcrumbs: 'childMdx.frontmatter.hideBreadcrumbs',
  childMdx___frontmatter___hideScrollCTA: 'childMdx.frontmatter.hideScrollCTA',
  childMdx___frontmatter___order: 'childMdx.frontmatter.order',
  childMdx___frontmatter___hideLanguageSelector: 'childMdx.frontmatter.hideLanguageSelector',
  childMdx___frontmatter___redirect_from: 'childMdx.frontmatter.redirect_from',
  childMdx___frontmatter___header: 'childMdx.frontmatter.header',
  childMdx___frontmatter___headerOrder: 'childMdx.frontmatter.headerOrder',
  childMdx___frontmatter___authors: 'childMdx.frontmatter.authors',
  childMdx___frontmatter___date: 'childMdx.frontmatter.date',
  childMdx___frontmatter___image: 'childMdx.frontmatter.image',
  childMdx___slug: 'childMdx.slug',
  childMdx___body: 'childMdx.body',
  childMdx___excerpt: 'childMdx.excerpt',
  childMdx___headings: 'childMdx.headings',
  childMdx___headings___value: 'childMdx.headings.value',
  childMdx___headings___depth: 'childMdx.headings.depth',
  childMdx___html: 'childMdx.html',
  childMdx___mdxAST: 'childMdx.mdxAST',
  childMdx___tableOfContents: 'childMdx.tableOfContents',
  childMdx___timeToRead: 'childMdx.timeToRead',
  childMdx___wordCount___paragraphs: 'childMdx.wordCount.paragraphs',
  childMdx___wordCount___sentences: 'childMdx.wordCount.sentences',
  childMdx___wordCount___words: 'childMdx.wordCount.words',
  childMdx___id: 'childMdx.id',
  childMdx___parent___id: 'childMdx.parent.id',
  childMdx___parent___parent___id: 'childMdx.parent.parent.id',
  childMdx___parent___parent___children: 'childMdx.parent.parent.children',
  childMdx___parent___children: 'childMdx.parent.children',
  childMdx___parent___children___id: 'childMdx.parent.children.id',
  childMdx___parent___children___children: 'childMdx.parent.children.children',
  childMdx___parent___internal___content: 'childMdx.parent.internal.content',
  childMdx___parent___internal___contentDigest: 'childMdx.parent.internal.contentDigest',
  childMdx___parent___internal___description: 'childMdx.parent.internal.description',
  childMdx___parent___internal___fieldOwners: 'childMdx.parent.internal.fieldOwners',
  childMdx___parent___internal___ignoreType: 'childMdx.parent.internal.ignoreType',
  childMdx___parent___internal___mediaType: 'childMdx.parent.internal.mediaType',
  childMdx___parent___internal___owner: 'childMdx.parent.internal.owner',
  childMdx___parent___internal___type: 'childMdx.parent.internal.type',
  childMdx___children: 'childMdx.children',
  childMdx___children___id: 'childMdx.children.id',
  childMdx___children___parent___id: 'childMdx.children.parent.id',
  childMdx___children___parent___children: 'childMdx.children.parent.children',
  childMdx___children___children: 'childMdx.children.children',
  childMdx___children___children___id: 'childMdx.children.children.id',
  childMdx___children___children___children: 'childMdx.children.children.children',
  childMdx___children___internal___content: 'childMdx.children.internal.content',
  childMdx___children___internal___contentDigest: 'childMdx.children.internal.contentDigest',
  childMdx___children___internal___description: 'childMdx.children.internal.description',
  childMdx___children___internal___fieldOwners: 'childMdx.children.internal.fieldOwners',
  childMdx___children___internal___ignoreType: 'childMdx.children.internal.ignoreType',
  childMdx___children___internal___mediaType: 'childMdx.children.internal.mediaType',
  childMdx___children___internal___owner: 'childMdx.children.internal.owner',
  childMdx___children___internal___type: 'childMdx.children.internal.type',
  childMdx___internal___content: 'childMdx.internal.content',
  childMdx___internal___contentDigest: 'childMdx.internal.contentDigest',
  childMdx___internal___description: 'childMdx.internal.description',
  childMdx___internal___fieldOwners: 'childMdx.internal.fieldOwners',
  childMdx___internal___ignoreType: 'childMdx.internal.ignoreType',
  childMdx___internal___mediaType: 'childMdx.internal.mediaType',
  childMdx___internal___owner: 'childMdx.internal.owner',
  childMdx___internal___type: 'childMdx.internal.type',
  childEnJson___id: 'childEnJson.id',
  childEnJson___parent___id: 'childEnJson.parent.id',
  childEnJson___parent___parent___id: 'childEnJson.parent.parent.id',
  childEnJson___parent___parent___children: 'childEnJson.parent.parent.children',
  childEnJson___parent___children: 'childEnJson.parent.children',
  childEnJson___parent___children___id: 'childEnJson.parent.children.id',
  childEnJson___parent___children___children: 'childEnJson.parent.children.children',
  childEnJson___parent___internal___content: 'childEnJson.parent.internal.content',
  childEnJson___parent___internal___contentDigest: 'childEnJson.parent.internal.contentDigest',
  childEnJson___parent___internal___description: 'childEnJson.parent.internal.description',
  childEnJson___parent___internal___fieldOwners: 'childEnJson.parent.internal.fieldOwners',
  childEnJson___parent___internal___ignoreType: 'childEnJson.parent.internal.ignoreType',
  childEnJson___parent___internal___mediaType: 'childEnJson.parent.internal.mediaType',
  childEnJson___parent___internal___owner: 'childEnJson.parent.internal.owner',
  childEnJson___parent___internal___type: 'childEnJson.parent.internal.type',
  childEnJson___children: 'childEnJson.children',
  childEnJson___children___id: 'childEnJson.children.id',
  childEnJson___children___parent___id: 'childEnJson.children.parent.id',
  childEnJson___children___parent___children: 'childEnJson.children.parent.children',
  childEnJson___children___children: 'childEnJson.children.children',
  childEnJson___children___children___id: 'childEnJson.children.children.id',
  childEnJson___children___children___children: 'childEnJson.children.children.children',
  childEnJson___children___internal___content: 'childEnJson.children.internal.content',
  childEnJson___children___internal___contentDigest: 'childEnJson.children.internal.contentDigest',
  childEnJson___children___internal___description: 'childEnJson.children.internal.description',
  childEnJson___children___internal___fieldOwners: 'childEnJson.children.internal.fieldOwners',
  childEnJson___children___internal___ignoreType: 'childEnJson.children.internal.ignoreType',
  childEnJson___children___internal___mediaType: 'childEnJson.children.internal.mediaType',
  childEnJson___children___internal___owner: 'childEnJson.children.internal.owner',
  childEnJson___children___internal___type: 'childEnJson.children.internal.type',
  childEnJson___internal___content: 'childEnJson.internal.content',
  childEnJson___internal___contentDigest: 'childEnJson.internal.contentDigest',
  childEnJson___internal___description: 'childEnJson.internal.description',
  childEnJson___internal___fieldOwners: 'childEnJson.internal.fieldOwners',
  childEnJson___internal___ignoreType: 'childEnJson.internal.ignoreType',
  childEnJson___internal___mediaType: 'childEnJson.internal.mediaType',
  childEnJson___internal___owner: 'childEnJson.internal.owner',
  childEnJson___internal___type: 'childEnJson.internal.type',
  childEnJson___Bug_Report: 'childEnJson.Bug_Report',
  childEnJson___Go_Back: 'childEnJson.Go_Back',
  childEnJson___Language: 'childEnJson.Language',
  childEnJson___Flag: 'childEnJson.Flag',
  childEnJson___Search: 'childEnJson.Search',
  childEnJson___No_Results: 'childEnJson.No_Results',
  childEnJson___Home: 'childEnJson.Home',
  childEnJson___Page_Language_Selector: 'childEnJson.Page_Language_Selector',
  childEnJson___Available_Languages: 'childEnJson.Available_Languages',
  childEnJson___LANGUAGES: 'childEnJson.LANGUAGES',
  childEnJson___Available_Languages_none: 'childEnJson.Available_Languages_none',
  childEnJson___Need_Another_Language: 'childEnJson.Need_Another_Language',
  childEnJson___Join_translation_team: 'childEnJson.Join_translation_team',
  childEnJson___Translations: 'childEnJson.Translations',
  childEnJson___Touts___alt_defaultImage: 'childEnJson.Touts.alt_defaultImage',
  childEnJson___Touts___alt_altImage: 'childEnJson.Touts.alt_altImage',
  childEnJson___Back_To_Main_Menu: 'childEnJson.Back_To_Main_Menu',
  childEnJson___aria_MakerHomeIcon: 'childEnJson.aria_MakerHomeIcon',
  childEnJson___aria_MakerFooterLogo: 'childEnJson.aria_MakerFooterLogo',
  childEnJson___aria_GithubIcon: 'childEnJson.aria_GithubIcon',
  childEnJson___aria_TwitterIcon: 'childEnJson.aria_TwitterIcon',
  childEnJson___aria_MediumIcon: 'childEnJson.aria_MediumIcon',
  childEnJson___aria_YoutubeIcon: 'childEnJson.aria_YoutubeIcon',
  childEnJson___aria_WeChatIcon: 'childEnJson.aria_WeChatIcon',
  childEnJson___aria_TelegramIcon: 'childEnJson.aria_TelegramIcon',
  childEnJson___aria_RedditIcon: 'childEnJson.aria_RedditIcon',
  childEnJson___aria_RocketChatIcon: 'childEnJson.aria_RocketChatIcon',
  childEnJson___aria_ExternalWebsite: 'childEnJson.aria_ExternalWebsite',
  childEnJson___Forum: 'childEnJson.Forum',
  childEnJson___Chat: 'childEnJson.Chat',
  childEnJson___NotFoundPage___seoTitle: 'childEnJson.NotFoundPage.seoTitle',
  childEnJson___NotFoundPage___line_1: 'childEnJson.NotFoundPage.line_1',
  childEnJson___NotFoundPage___line_2: 'childEnJson.NotFoundPage.line_2',
  childEnJson___NotFoundPage___line_3: 'childEnJson.NotFoundPage.line_3',
  childEnJson___Footer___Resources: 'childEnJson.Footer.Resources',
  childEnJson___Footer___Whitepaper: 'childEnJson.Footer.Whitepaper',
  childEnJson___Footer___FAQs: 'childEnJson.Footer.FAQs',
  childEnJson___Footer___Privacy_Policy: 'childEnJson.Footer.Privacy_Policy',
  childEnJson___Footer___Brand_Assets: 'childEnJson.Footer.Brand_Assets',
  childEnJson___Footer___Feeds: 'childEnJson.Footer.Feeds',
  childEnJson___Footer___Service_Status: 'childEnJson.Footer.Service_Status',
  childEnJson___Footer___Products: 'childEnJson.Footer.Products',
  childEnJson___Footer___Oasis: 'childEnJson.Footer.Oasis',
  childEnJson___Footer___Migrate: 'childEnJson.Footer.Migrate',
  childEnJson___Footer___Ecosystem: 'childEnJson.Footer.Ecosystem',
  childEnJson___Footer___Governance: 'childEnJson.Footer.Governance',
  childEnJson___Footer___Developers: 'childEnJson.Footer.Developers',
  childEnJson___Footer___Documentation: 'childEnJson.Footer.Documentation',
  childEnJson___Footer___Daijs: 'childEnJson.Footer.Daijs',
  childEnJson___Footer___Developer_Guides: 'childEnJson.Footer.Developer_Guides',
  childEnJson___Footer___Foundation: 'childEnJson.Footer.Foundation',
  childEnJson___Footer___Team: 'childEnJson.Footer.Team',
  childEnJson___Footer___Careers: 'childEnJson.Footer.Careers',
  childEnJson___Footer___Contact: 'childEnJson.Footer.Contact',
  childEnJson___Footer___Blog: 'childEnJson.Footer.Blog',
  childEnJson___Blog: 'childEnJson.Blog',
  childEnJson___Back_To_Blog: 'childEnJson.Back_To_Blog',
  childEnJson___Blog_Language_Selector: 'childEnJson.Blog_Language_Selector',
  childEnJson___editorial: 'childEnJson.editorial',
  childEnJson___community: 'childEnJson.community',
  childEnJson___governance: 'childEnJson.governance',
  childEnJson___Maker_Community_Blog: 'childEnJson.Maker_Community_Blog',
  childEnJson___Latest_In: 'childEnJson.Latest_In',
  childEnJson___See_More_Posts: 'childEnJson.See_More_Posts'
});


declare type TGatsbyTypes_FileFieldsEnum = $Values<typeof TGatsbyTypes_FileFieldsEnumValues>;

declare type TGatsbyTypes_FileFilterInput = {|
  sourceInstanceName?: ?TGatsbyTypes_StringQueryOperatorInput,
  absolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  extension?: ?TGatsbyTypes_StringQueryOperatorInput,
  size?: ?TGatsbyTypes_IntQueryOperatorInput,
  prettySize?: ?TGatsbyTypes_StringQueryOperatorInput,
  modifiedTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  accessTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  changeTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  root?: ?TGatsbyTypes_StringQueryOperatorInput,
  dir?: ?TGatsbyTypes_StringQueryOperatorInput,
  base?: ?TGatsbyTypes_StringQueryOperatorInput,
  ext?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativeDirectory?: ?TGatsbyTypes_StringQueryOperatorInput,
  dev?: ?TGatsbyTypes_IntQueryOperatorInput,
  mode?: ?TGatsbyTypes_IntQueryOperatorInput,
  nlink?: ?TGatsbyTypes_IntQueryOperatorInput,
  uid?: ?TGatsbyTypes_IntQueryOperatorInput,
  gid?: ?TGatsbyTypes_IntQueryOperatorInput,
  rdev?: ?TGatsbyTypes_IntQueryOperatorInput,
  ino?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  mtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  ctimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atime?: ?TGatsbyTypes_DateQueryOperatorInput,
  mtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  ctime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  blksize?: ?TGatsbyTypes_IntQueryOperatorInput,
  blocks?: ?TGatsbyTypes_IntQueryOperatorInput,
  publicURL?: ?TGatsbyTypes_StringQueryOperatorInput,
  childImageSharp?: ?TGatsbyTypes_ImageSharpFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  childContentJson?: ?TGatsbyTypes_ContentJsonFilterInput,
  childMdx?: ?TGatsbyTypes_MdxFilterInput,
  childEnJson?: ?TGatsbyTypes_EnJsonFilterInput,
|};

declare type TGatsbyTypes_FileGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_FileEdge>,
  +nodes: Array<TGatsbyTypes_File>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_FileSortInput = {|
  fields?: ?Array<?FileFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_FloatQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Float'>,
  ne?: ?$ElementType<Scalars, 'Float'>,
  gt?: ?$ElementType<Scalars, 'Float'>,
  gte?: ?$ElementType<Scalars, 'Float'>,
  lt?: ?$ElementType<Scalars, 'Float'>,
  lte?: ?$ElementType<Scalars, 'Float'>,
  in?: ?Array<?$ElementType<Scalars, 'Float'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Float'>>,
|};

export const TGatsbyTypes_HeadingsMdxValues = Object.freeze({
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
});


declare type TGatsbyTypes_HeadingsMdx = $Values<typeof TGatsbyTypes_HeadingsMdxValues>;

export const TGatsbyTypes_ImageCropFocusValues = Object.freeze({
  CENTER: 'CENTER',
  NORTH: 1,
  NORTHEAST: 5,
  EAST: 2,
  SOUTHEAST: 6,
  SOUTH: 3,
  SOUTHWEST: 7,
  WEST: 4,
  NORTHWEST: 8,
  ENTROPY: 16,
  ATTENTION: 17
});


declare type TGatsbyTypes_ImageCropFocus = $Values<typeof TGatsbyTypes_ImageCropFocusValues>;

export const TGatsbyTypes_ImageFitValues = Object.freeze({
  COVER: 'cover',
  CONTAIN: 'contain',
  FILL: 'fill',
  INSIDE: 'inside',
  OUTSIDE: 'outside'
});


declare type TGatsbyTypes_ImageFit = $Values<typeof TGatsbyTypes_ImageFitValues>;

export const TGatsbyTypes_ImageFormatValues = Object.freeze({
  NO_CHANGE: 'NO_CHANGE',
  JPG: 'jpg',
  PNG: 'png',
  WEBP: 'webp'
});


declare type TGatsbyTypes_ImageFormat = $Values<typeof TGatsbyTypes_ImageFormatValues>;

export const TGatsbyTypes_ImageLayoutValues = Object.freeze({
  FIXED: 'fixed',
  FLUID: 'fluid',
  CONSTRAINED: 'constrained'
});


declare type TGatsbyTypes_ImageLayout = $Values<typeof TGatsbyTypes_ImageLayoutValues>;

export const TGatsbyTypes_ImagePlaceholderValues = Object.freeze({
  DOMINANT_COLOR: 'dominantColor',
  TRACED_SVG: 'tracedSVG',
  BASE64: 'base64',
  NONE: 'none'
});


declare type TGatsbyTypes_ImagePlaceholder = $Values<typeof TGatsbyTypes_ImagePlaceholderValues>;

declare type TGatsbyTypes_ImageSharp = {|
  ...TGatsbyTypes_Node,
  ...{|
    +fixed?: ?TGatsbyTypes_ImageSharpFixed,
    +resolutions?: ?TGatsbyTypes_ImageSharpResolutions,
    +fluid?: ?TGatsbyTypes_ImageSharpFluid,
    +sizes?: ?TGatsbyTypes_ImageSharpSizes,
    +gatsbyImage?: ?TGatsbyTypes_ImageSharpGatsbyImage,
    +original?: ?TGatsbyTypes_ImageSharpOriginal,
    +resize?: ?TGatsbyTypes_ImageSharpResize,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
  |}
|};


declare type TGatsbyTypes_ImageSharp_fixedArgs = {|
  width?: ?$ElementType<Scalars, 'Int'>,
  height?: ?$ElementType<Scalars, 'Int'>,
  base64Width?: ?$ElementType<Scalars, 'Int'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  traceSVG?: ?TGatsbyTypes_Potrace,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  toFormat: TGatsbyTypes_ImageFormat,
  toFormatBase64: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
|};


declare type TGatsbyTypes_ImageSharp_resolutionsArgs = {|
  width?: ?$ElementType<Scalars, 'Int'>,
  height?: ?$ElementType<Scalars, 'Int'>,
  base64Width?: ?$ElementType<Scalars, 'Int'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  traceSVG?: ?TGatsbyTypes_Potrace,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  toFormat: TGatsbyTypes_ImageFormat,
  toFormatBase64: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
|};


declare type TGatsbyTypes_ImageSharp_fluidArgs = {|
  maxWidth?: ?$ElementType<Scalars, 'Int'>,
  maxHeight?: ?$ElementType<Scalars, 'Int'>,
  base64Width?: ?$ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  traceSVG?: ?TGatsbyTypes_Potrace,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  toFormat: TGatsbyTypes_ImageFormat,
  toFormatBase64: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
  sizes: $ElementType<Scalars, 'String'>,
  srcSetBreakpoints: Array<?$ElementType<Scalars, 'Int'>>,
|};


declare type TGatsbyTypes_ImageSharp_sizesArgs = {|
  maxWidth?: ?$ElementType<Scalars, 'Int'>,
  maxHeight?: ?$ElementType<Scalars, 'Int'>,
  base64Width?: ?$ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  traceSVG?: ?TGatsbyTypes_Potrace,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  toFormat: TGatsbyTypes_ImageFormat,
  toFormatBase64: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
  sizes: $ElementType<Scalars, 'String'>,
  srcSetBreakpoints: Array<?$ElementType<Scalars, 'Int'>>,
|};


declare type TGatsbyTypes_ImageSharp_gatsbyImageArgs = {|
  layout: TGatsbyTypes_ImageLayout,
  maxWidth?: ?$ElementType<Scalars, 'Int'>,
  maxHeight?: ?$ElementType<Scalars, 'Int'>,
  width?: ?$ElementType<Scalars, 'Int'>,
  height?: ?$ElementType<Scalars, 'Int'>,
  placeholder?: ?TGatsbyTypes_ImagePlaceholder,
  tracedSVGOptions?: ?TGatsbyTypes_Potrace,
  webP: $ElementType<Scalars, 'Boolean'>,
  outputPixelDensities?: ?Array<?$ElementType<Scalars, 'Float'>>,
  sizes: $ElementType<Scalars, 'String'>,
  base64Width?: ?$ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  toFormat: TGatsbyTypes_ImageFormat,
  toFormatBase64: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
  srcSetBreakpoints: Array<?$ElementType<Scalars, 'Int'>>,
|};


declare type TGatsbyTypes_ImageSharp_resizeArgs = {|
  width?: ?$ElementType<Scalars, 'Int'>,
  height?: ?$ElementType<Scalars, 'Int'>,
  quality?: ?$ElementType<Scalars, 'Int'>,
  jpegQuality?: ?$ElementType<Scalars, 'Int'>,
  pngQuality?: ?$ElementType<Scalars, 'Int'>,
  webpQuality?: ?$ElementType<Scalars, 'Int'>,
  jpegProgressive: $ElementType<Scalars, 'Boolean'>,
  pngCompressionLevel: $ElementType<Scalars, 'Int'>,
  pngCompressionSpeed: $ElementType<Scalars, 'Int'>,
  grayscale: $ElementType<Scalars, 'Boolean'>,
  duotone?: ?TGatsbyTypes_DuotoneGradient,
  base64: $ElementType<Scalars, 'Boolean'>,
  traceSVG?: ?TGatsbyTypes_Potrace,
  toFormat: TGatsbyTypes_ImageFormat,
  cropFocus: TGatsbyTypes_ImageCropFocus,
  fit: TGatsbyTypes_ImageFit,
  background: $ElementType<Scalars, 'String'>,
  rotate: $ElementType<Scalars, 'Int'>,
  trim: $ElementType<Scalars, 'Float'>,
|};

declare type TGatsbyTypes_ImageSharpConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_ImageSharpEdge>,
  +nodes: Array<TGatsbyTypes_ImageSharp>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_ImageSharpGroupConnection>,
|};


declare type TGatsbyTypes_ImageSharpConnection_distinctArgs = {|
  field: TGatsbyTypes_ImageSharpFieldsEnum,
|};


declare type TGatsbyTypes_ImageSharpConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_ImageSharpFieldsEnum,
|};

declare type TGatsbyTypes_ImageSharpEdge = {|
  +next?: ?TGatsbyTypes_ImageSharp,
  +node: TGatsbyTypes_ImageSharp,
  +previous?: ?TGatsbyTypes_ImageSharp,
|};

export const TGatsbyTypes_ImageSharpFieldsEnumValues = Object.freeze({
  fixed___base64: 'fixed.base64',
  fixed___tracedSVG: 'fixed.tracedSVG',
  fixed___aspectRatio: 'fixed.aspectRatio',
  fixed___width: 'fixed.width',
  fixed___height: 'fixed.height',
  fixed___src: 'fixed.src',
  fixed___srcSet: 'fixed.srcSet',
  fixed___srcWebp: 'fixed.srcWebp',
  fixed___srcSetWebp: 'fixed.srcSetWebp',
  fixed___originalName: 'fixed.originalName',
  resolutions___base64: 'resolutions.base64',
  resolutions___tracedSVG: 'resolutions.tracedSVG',
  resolutions___aspectRatio: 'resolutions.aspectRatio',
  resolutions___width: 'resolutions.width',
  resolutions___height: 'resolutions.height',
  resolutions___src: 'resolutions.src',
  resolutions___srcSet: 'resolutions.srcSet',
  resolutions___srcWebp: 'resolutions.srcWebp',
  resolutions___srcSetWebp: 'resolutions.srcSetWebp',
  resolutions___originalName: 'resolutions.originalName',
  fluid___base64: 'fluid.base64',
  fluid___tracedSVG: 'fluid.tracedSVG',
  fluid___aspectRatio: 'fluid.aspectRatio',
  fluid___src: 'fluid.src',
  fluid___srcSet: 'fluid.srcSet',
  fluid___srcWebp: 'fluid.srcWebp',
  fluid___srcSetWebp: 'fluid.srcSetWebp',
  fluid___sizes: 'fluid.sizes',
  fluid___originalImg: 'fluid.originalImg',
  fluid___originalName: 'fluid.originalName',
  fluid___presentationWidth: 'fluid.presentationWidth',
  fluid___presentationHeight: 'fluid.presentationHeight',
  sizes___base64: 'sizes.base64',
  sizes___tracedSVG: 'sizes.tracedSVG',
  sizes___aspectRatio: 'sizes.aspectRatio',
  sizes___src: 'sizes.src',
  sizes___srcSet: 'sizes.srcSet',
  sizes___srcWebp: 'sizes.srcWebp',
  sizes___srcSetWebp: 'sizes.srcSetWebp',
  sizes___sizes: 'sizes.sizes',
  sizes___originalImg: 'sizes.originalImg',
  sizes___originalName: 'sizes.originalName',
  sizes___presentationWidth: 'sizes.presentationWidth',
  sizes___presentationHeight: 'sizes.presentationHeight',
  gatsbyImage___imageData: 'gatsbyImage.imageData',
  original___width: 'original.width',
  original___height: 'original.height',
  original___src: 'original.src',
  resize___src: 'resize.src',
  resize___tracedSVG: 'resize.tracedSVG',
  resize___width: 'resize.width',
  resize___height: 'resize.height',
  resize___aspectRatio: 'resize.aspectRatio',
  resize___originalName: 'resize.originalName',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type'
});


declare type TGatsbyTypes_ImageSharpFieldsEnum = $Values<typeof TGatsbyTypes_ImageSharpFieldsEnumValues>;

declare type TGatsbyTypes_ImageSharpFilterInput = {|
  fixed?: ?TGatsbyTypes_ImageSharpFixedFilterInput,
  resolutions?: ?TGatsbyTypes_ImageSharpResolutionsFilterInput,
  fluid?: ?TGatsbyTypes_ImageSharpFluidFilterInput,
  sizes?: ?TGatsbyTypes_ImageSharpSizesFilterInput,
  gatsbyImage?: ?TGatsbyTypes_ImageSharpGatsbyImageFilterInput,
  original?: ?TGatsbyTypes_ImageSharpOriginalFilterInput,
  resize?: ?TGatsbyTypes_ImageSharpResizeFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};

declare type TGatsbyTypes_ImageSharpFixed = {|
  +base64?: ?$ElementType<Scalars, 'String'>,
  +tracedSVG?: ?$ElementType<Scalars, 'String'>,
  +aspectRatio?: ?$ElementType<Scalars, 'Float'>,
  +width: $ElementType<Scalars, 'Float'>,
  +height: $ElementType<Scalars, 'Float'>,
  +src: $ElementType<Scalars, 'String'>,
  +srcSet: $ElementType<Scalars, 'String'>,
  +srcWebp?: ?$ElementType<Scalars, 'String'>,
  +srcSetWebp?: ?$ElementType<Scalars, 'String'>,
  +originalName?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ImageSharpFixedFilterInput = {|
  base64?: ?TGatsbyTypes_StringQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_StringQueryOperatorInput,
  aspectRatio?: ?TGatsbyTypes_FloatQueryOperatorInput,
  width?: ?TGatsbyTypes_FloatQueryOperatorInput,
  height?: ?TGatsbyTypes_FloatQueryOperatorInput,
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSet?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSetWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalName?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpFluid = {|
  +base64?: ?$ElementType<Scalars, 'String'>,
  +tracedSVG?: ?$ElementType<Scalars, 'String'>,
  +aspectRatio: $ElementType<Scalars, 'Float'>,
  +src: $ElementType<Scalars, 'String'>,
  +srcSet: $ElementType<Scalars, 'String'>,
  +srcWebp?: ?$ElementType<Scalars, 'String'>,
  +srcSetWebp?: ?$ElementType<Scalars, 'String'>,
  +sizes: $ElementType<Scalars, 'String'>,
  +originalImg?: ?$ElementType<Scalars, 'String'>,
  +originalName?: ?$ElementType<Scalars, 'String'>,
  +presentationWidth: $ElementType<Scalars, 'Int'>,
  +presentationHeight: $ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_ImageSharpFluidFilterInput = {|
  base64?: ?TGatsbyTypes_StringQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_StringQueryOperatorInput,
  aspectRatio?: ?TGatsbyTypes_FloatQueryOperatorInput,
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSet?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSetWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  sizes?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalImg?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalName?: ?TGatsbyTypes_StringQueryOperatorInput,
  presentationWidth?: ?TGatsbyTypes_IntQueryOperatorInput,
  presentationHeight?: ?TGatsbyTypes_IntQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpGatsbyImage = {|
  +imageData: $ElementType<Scalars, 'JSON'>,
|};

declare type TGatsbyTypes_ImageSharpGatsbyImageFilterInput = {|
  imageData?: ?TGatsbyTypes_JSONQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_ImageSharpEdge>,
  +nodes: Array<TGatsbyTypes_ImageSharp>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ImageSharpOriginal = {|
  +width?: ?$ElementType<Scalars, 'Float'>,
  +height?: ?$ElementType<Scalars, 'Float'>,
  +src?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ImageSharpOriginalFilterInput = {|
  width?: ?TGatsbyTypes_FloatQueryOperatorInput,
  height?: ?TGatsbyTypes_FloatQueryOperatorInput,
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpResize = {|
  +src?: ?$ElementType<Scalars, 'String'>,
  +tracedSVG?: ?$ElementType<Scalars, 'String'>,
  +width?: ?$ElementType<Scalars, 'Int'>,
  +height?: ?$ElementType<Scalars, 'Int'>,
  +aspectRatio?: ?$ElementType<Scalars, 'Float'>,
  +originalName?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ImageSharpResizeFilterInput = {|
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_StringQueryOperatorInput,
  width?: ?TGatsbyTypes_IntQueryOperatorInput,
  height?: ?TGatsbyTypes_IntQueryOperatorInput,
  aspectRatio?: ?TGatsbyTypes_FloatQueryOperatorInput,
  originalName?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpResolutions = {|
  +base64?: ?$ElementType<Scalars, 'String'>,
  +tracedSVG?: ?$ElementType<Scalars, 'String'>,
  +aspectRatio?: ?$ElementType<Scalars, 'Float'>,
  +width: $ElementType<Scalars, 'Float'>,
  +height: $ElementType<Scalars, 'Float'>,
  +src: $ElementType<Scalars, 'String'>,
  +srcSet: $ElementType<Scalars, 'String'>,
  +srcWebp?: ?$ElementType<Scalars, 'String'>,
  +srcSetWebp?: ?$ElementType<Scalars, 'String'>,
  +originalName?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_ImageSharpResolutionsFilterInput = {|
  base64?: ?TGatsbyTypes_StringQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_StringQueryOperatorInput,
  aspectRatio?: ?TGatsbyTypes_FloatQueryOperatorInput,
  width?: ?TGatsbyTypes_FloatQueryOperatorInput,
  height?: ?TGatsbyTypes_FloatQueryOperatorInput,
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSet?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSetWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalName?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpSizes = {|
  +base64?: ?$ElementType<Scalars, 'String'>,
  +tracedSVG?: ?$ElementType<Scalars, 'String'>,
  +aspectRatio: $ElementType<Scalars, 'Float'>,
  +src: $ElementType<Scalars, 'String'>,
  +srcSet: $ElementType<Scalars, 'String'>,
  +srcWebp?: ?$ElementType<Scalars, 'String'>,
  +srcSetWebp?: ?$ElementType<Scalars, 'String'>,
  +sizes: $ElementType<Scalars, 'String'>,
  +originalImg?: ?$ElementType<Scalars, 'String'>,
  +originalName?: ?$ElementType<Scalars, 'String'>,
  +presentationWidth: $ElementType<Scalars, 'Int'>,
  +presentationHeight: $ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_ImageSharpSizesFilterInput = {|
  base64?: ?TGatsbyTypes_StringQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_StringQueryOperatorInput,
  aspectRatio?: ?TGatsbyTypes_FloatQueryOperatorInput,
  src?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSet?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  srcSetWebp?: ?TGatsbyTypes_StringQueryOperatorInput,
  sizes?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalImg?: ?TGatsbyTypes_StringQueryOperatorInput,
  originalName?: ?TGatsbyTypes_StringQueryOperatorInput,
  presentationWidth?: ?TGatsbyTypes_IntQueryOperatorInput,
  presentationHeight?: ?TGatsbyTypes_IntQueryOperatorInput,
|};

declare type TGatsbyTypes_ImageSharpSortInput = {|
  fields?: ?Array<?ImageSharpFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_Internal = {|
  +content?: ?$ElementType<Scalars, 'String'>,
  +contentDigest: $ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +fieldOwners?: ?Array<?$ElementType<Scalars, 'String'>>,
  +ignoreType?: ?$ElementType<Scalars, 'Boolean'>,
  +mediaType?: ?$ElementType<Scalars, 'String'>,
  +owner: $ElementType<Scalars, 'String'>,
  +type: $ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_InternalFilterInput = {|
  content?: ?TGatsbyTypes_StringQueryOperatorInput,
  contentDigest?: ?TGatsbyTypes_StringQueryOperatorInput,
  description?: ?TGatsbyTypes_StringQueryOperatorInput,
  fieldOwners?: ?TGatsbyTypes_StringQueryOperatorInput,
  ignoreType?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  mediaType?: ?TGatsbyTypes_StringQueryOperatorInput,
  owner?: ?TGatsbyTypes_StringQueryOperatorInput,
  type?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_IntQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Int'>,
  ne?: ?$ElementType<Scalars, 'Int'>,
  gt?: ?$ElementType<Scalars, 'Int'>,
  gte?: ?$ElementType<Scalars, 'Int'>,
  lt?: ?$ElementType<Scalars, 'Int'>,
  lte?: ?$ElementType<Scalars, 'Int'>,
  in?: ?Array<?$ElementType<Scalars, 'Int'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Int'>>,
|};


declare type TGatsbyTypes_JSONQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'JSON'>,
  ne?: ?$ElementType<Scalars, 'JSON'>,
  in?: ?Array<?$ElementType<Scalars, 'JSON'>>,
  nin?: ?Array<?$ElementType<Scalars, 'JSON'>>,
  regex?: ?$ElementType<Scalars, 'JSON'>,
  glob?: ?$ElementType<Scalars, 'JSON'>,
|};

declare type TGatsbyTypes_Mdx = {|
  ...TGatsbyTypes_Node,
  ...{|
    +rawBody: $ElementType<Scalars, 'String'>,
    +fileAbsolutePath: $ElementType<Scalars, 'String'>,
    +frontmatter?: ?TGatsbyTypes_MdxFrontmatter,
    +slug?: ?$ElementType<Scalars, 'String'>,
    +body: $ElementType<Scalars, 'String'>,
    +excerpt: $ElementType<Scalars, 'String'>,
    +headings?: ?Array<?TGatsbyTypes_MdxHeadingMdx>,
    +html?: ?$ElementType<Scalars, 'String'>,
    +mdxAST?: ?$ElementType<Scalars, 'JSON'>,
    +tableOfContents?: ?$ElementType<Scalars, 'JSON'>,
    +timeToRead?: ?$ElementType<Scalars, 'Int'>,
    +wordCount?: ?TGatsbyTypes_MdxWordCount,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
  |}
|};


declare type TGatsbyTypes_Mdx_excerptArgs = {|
  pruneLength: $ElementType<Scalars, 'Int'>,
  truncate: $ElementType<Scalars, 'Boolean'>,
|};


declare type TGatsbyTypes_Mdx_headingsArgs = {|
  depth?: ?TGatsbyTypes_HeadingsMdx,
|};


declare type TGatsbyTypes_Mdx_tableOfContentsArgs = {|
  maxDepth?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_MdxConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_MdxEdge>,
  +nodes: Array<TGatsbyTypes_Mdx>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_MdxGroupConnection>,
|};


declare type TGatsbyTypes_MdxConnection_distinctArgs = {|
  field: TGatsbyTypes_MdxFieldsEnum,
|};


declare type TGatsbyTypes_MdxConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_MdxFieldsEnum,
|};

declare type TGatsbyTypes_MdxEdge = {|
  +next?: ?TGatsbyTypes_Mdx,
  +node: TGatsbyTypes_Mdx,
  +previous?: ?TGatsbyTypes_Mdx,
|};

export const TGatsbyTypes_MdxFieldsEnumValues = Object.freeze({
  rawBody: 'rawBody',
  fileAbsolutePath: 'fileAbsolutePath',
  frontmatter___title: 'frontmatter.title',
  frontmatter___description: 'frontmatter.description',
  frontmatter___keywords: 'frontmatter.keywords',
  frontmatter___featuredImage: 'frontmatter.featuredImage',
  frontmatter___hideBreadcrumbs: 'frontmatter.hideBreadcrumbs',
  frontmatter___hideScrollCTA: 'frontmatter.hideScrollCTA',
  frontmatter___order: 'frontmatter.order',
  frontmatter___hideLanguageSelector: 'frontmatter.hideLanguageSelector',
  frontmatter___redirect_from: 'frontmatter.redirect_from',
  frontmatter___header: 'frontmatter.header',
  frontmatter___headerOrder: 'frontmatter.headerOrder',
  frontmatter___authors: 'frontmatter.authors',
  frontmatter___date: 'frontmatter.date',
  frontmatter___image: 'frontmatter.image',
  slug: 'slug',
  body: 'body',
  excerpt: 'excerpt',
  headings: 'headings',
  headings___value: 'headings.value',
  headings___depth: 'headings.depth',
  html: 'html',
  mdxAST: 'mdxAST',
  tableOfContents: 'tableOfContents',
  timeToRead: 'timeToRead',
  wordCount___paragraphs: 'wordCount.paragraphs',
  wordCount___sentences: 'wordCount.sentences',
  wordCount___words: 'wordCount.words',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type'
});


declare type TGatsbyTypes_MdxFieldsEnum = $Values<typeof TGatsbyTypes_MdxFieldsEnumValues>;

declare type TGatsbyTypes_MdxFilterInput = {|
  rawBody?: ?TGatsbyTypes_StringQueryOperatorInput,
  fileAbsolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  frontmatter?: ?TGatsbyTypes_MdxFrontmatterFilterInput,
  slug?: ?TGatsbyTypes_StringQueryOperatorInput,
  body?: ?TGatsbyTypes_StringQueryOperatorInput,
  excerpt?: ?TGatsbyTypes_StringQueryOperatorInput,
  headings?: ?TGatsbyTypes_MdxHeadingMdxFilterListInput,
  html?: ?TGatsbyTypes_StringQueryOperatorInput,
  mdxAST?: ?TGatsbyTypes_JSONQueryOperatorInput,
  tableOfContents?: ?TGatsbyTypes_JSONQueryOperatorInput,
  timeToRead?: ?TGatsbyTypes_IntQueryOperatorInput,
  wordCount?: ?TGatsbyTypes_MdxWordCountFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};

declare type TGatsbyTypes_MdxFrontmatter = {|
  +title: $ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +keywords?: ?$ElementType<Scalars, 'String'>,
  +featuredImage?: ?$ElementType<Scalars, 'String'>,
  +hideBreadcrumbs?: ?$ElementType<Scalars, 'Boolean'>,
  +hideScrollCTA?: ?$ElementType<Scalars, 'Boolean'>,
  +order?: ?$ElementType<Scalars, 'Int'>,
  +hideLanguageSelector?: ?$ElementType<Scalars, 'Boolean'>,
  +redirect_from?: ?Array<?$ElementType<Scalars, 'String'>>,
  +header?: ?$ElementType<Scalars, 'Boolean'>,
  +headerOrder?: ?$ElementType<Scalars, 'Int'>,
  +authors?: ?Array<?$ElementType<Scalars, 'String'>>,
  +date?: ?$ElementType<Scalars, 'Date'>,
  +image?: ?$ElementType<Scalars, 'String'>,
|};


declare type TGatsbyTypes_MdxFrontmatter_dateArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_MdxFrontmatterFilterInput = {|
  title?: ?TGatsbyTypes_StringQueryOperatorInput,
  description?: ?TGatsbyTypes_StringQueryOperatorInput,
  keywords?: ?TGatsbyTypes_StringQueryOperatorInput,
  featuredImage?: ?TGatsbyTypes_StringQueryOperatorInput,
  hideBreadcrumbs?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  hideScrollCTA?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  order?: ?TGatsbyTypes_IntQueryOperatorInput,
  hideLanguageSelector?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  redirect_from?: ?TGatsbyTypes_StringQueryOperatorInput,
  header?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  headerOrder?: ?TGatsbyTypes_IntQueryOperatorInput,
  authors?: ?TGatsbyTypes_StringQueryOperatorInput,
  date?: ?TGatsbyTypes_DateQueryOperatorInput,
  image?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_MdxGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_MdxEdge>,
  +nodes: Array<TGatsbyTypes_Mdx>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_MdxHeadingMdx = {|
  +value?: ?$ElementType<Scalars, 'String'>,
  +depth?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_MdxHeadingMdxFilterInput = {|
  value?: ?TGatsbyTypes_StringQueryOperatorInput,
  depth?: ?TGatsbyTypes_IntQueryOperatorInput,
|};

declare type TGatsbyTypes_MdxHeadingMdxFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_MdxHeadingMdxFilterInput,
|};

declare type TGatsbyTypes_MdxSortInput = {|
  fields?: ?Array<?MdxFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_MdxWordCount = {|
  +paragraphs?: ?$ElementType<Scalars, 'Int'>,
  +sentences?: ?$ElementType<Scalars, 'Int'>,
  +words?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_MdxWordCountFilterInput = {|
  paragraphs?: ?TGatsbyTypes_IntQueryOperatorInput,
  sentences?: ?TGatsbyTypes_IntQueryOperatorInput,
  words?: ?TGatsbyTypes_IntQueryOperatorInput,
|};

/** Node Interface */
declare type TGatsbyTypes_Node = {|
  +id: $ElementType<Scalars, 'ID'>,
  +parent?: ?TGatsbyTypes_Node,
  +children: Array<TGatsbyTypes_Node>,
  +internal: TGatsbyTypes_Internal,
|};

declare type TGatsbyTypes_NodeFilterInput = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};

declare type TGatsbyTypes_NodeFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_NodeFilterInput,
|};

declare type TGatsbyTypes_PageInfo = {|
  +currentPage: $ElementType<Scalars, 'Int'>,
  +hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  +hasNextPage: $ElementType<Scalars, 'Boolean'>,
  +itemCount: $ElementType<Scalars, 'Int'>,
  +pageCount: $ElementType<Scalars, 'Int'>,
  +perPage?: ?$ElementType<Scalars, 'Int'>,
  +totalCount: $ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_Potrace = {|
  turnPolicy?: ?PotraceTurnPolicy,
  turdSize?: ?$ElementType<Scalars, 'Float'>,
  alphaMax?: ?$ElementType<Scalars, 'Float'>,
  optCurve?: ?$ElementType<Scalars, 'Boolean'>,
  optTolerance?: ?$ElementType<Scalars, 'Float'>,
  threshold?: ?$ElementType<Scalars, 'Int'>,
  blackOnWhite?: ?$ElementType<Scalars, 'Boolean'>,
  color?: ?$ElementType<Scalars, 'String'>,
  background?: ?$ElementType<Scalars, 'String'>,
|};

export const TGatsbyTypes_PotraceTurnPolicyValues = Object.freeze({
  TURNPOLICY_BLACK: 'black',
  TURNPOLICY_WHITE: 'white',
  TURNPOLICY_LEFT: 'left',
  TURNPOLICY_RIGHT: 'right',
  TURNPOLICY_MINORITY: 'minority',
  TURNPOLICY_MAJORITY: 'majority'
});


declare type TGatsbyTypes_PotraceTurnPolicy = $Values<typeof TGatsbyTypes_PotraceTurnPolicyValues>;

declare type TGatsbyTypes_Query = {|
  +file?: ?TGatsbyTypes_File,
  +allFile: TGatsbyTypes_FileConnection,
  +directory?: ?TGatsbyTypes_Directory,
  +allDirectory: TGatsbyTypes_DirectoryConnection,
  +site?: ?TGatsbyTypes_Site,
  +allSite: TGatsbyTypes_SiteConnection,
  +sitePage?: ?TGatsbyTypes_SitePage,
  +allSitePage: TGatsbyTypes_SitePageConnection,
  +imageSharp?: ?TGatsbyTypes_ImageSharp,
  +allImageSharp: TGatsbyTypes_ImageSharpConnection,
  +mdx?: ?TGatsbyTypes_Mdx,
  +allMdx: TGatsbyTypes_MdxConnection,
  +contentJson?: ?TGatsbyTypes_ContentJson,
  +allContentJson: TGatsbyTypes_ContentJsonConnection,
  +enJson?: ?TGatsbyTypes_EnJson,
  +allEnJson: TGatsbyTypes_EnJsonConnection,
  +siteBuildMetadata?: ?TGatsbyTypes_SiteBuildMetadata,
  +allSiteBuildMetadata: TGatsbyTypes_SiteBuildMetadataConnection,
  +sitePlugin?: ?TGatsbyTypes_SitePlugin,
  +allSitePlugin: TGatsbyTypes_SitePluginConnection,
|};


declare type TGatsbyTypes_Query_fileArgs = {|
  sourceInstanceName?: ?TGatsbyTypes_StringQueryOperatorInput,
  absolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  extension?: ?TGatsbyTypes_StringQueryOperatorInput,
  size?: ?TGatsbyTypes_IntQueryOperatorInput,
  prettySize?: ?TGatsbyTypes_StringQueryOperatorInput,
  modifiedTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  accessTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  changeTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  root?: ?TGatsbyTypes_StringQueryOperatorInput,
  dir?: ?TGatsbyTypes_StringQueryOperatorInput,
  base?: ?TGatsbyTypes_StringQueryOperatorInput,
  ext?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativeDirectory?: ?TGatsbyTypes_StringQueryOperatorInput,
  dev?: ?TGatsbyTypes_IntQueryOperatorInput,
  mode?: ?TGatsbyTypes_IntQueryOperatorInput,
  nlink?: ?TGatsbyTypes_IntQueryOperatorInput,
  uid?: ?TGatsbyTypes_IntQueryOperatorInput,
  gid?: ?TGatsbyTypes_IntQueryOperatorInput,
  rdev?: ?TGatsbyTypes_IntQueryOperatorInput,
  ino?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  mtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  ctimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atime?: ?TGatsbyTypes_DateQueryOperatorInput,
  mtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  ctime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  blksize?: ?TGatsbyTypes_IntQueryOperatorInput,
  blocks?: ?TGatsbyTypes_IntQueryOperatorInput,
  publicURL?: ?TGatsbyTypes_StringQueryOperatorInput,
  childImageSharp?: ?TGatsbyTypes_ImageSharpFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  childContentJson?: ?TGatsbyTypes_ContentJsonFilterInput,
  childMdx?: ?TGatsbyTypes_MdxFilterInput,
  childEnJson?: ?TGatsbyTypes_EnJsonFilterInput,
|};


declare type TGatsbyTypes_Query_allFileArgs = {|
  filter?: ?TGatsbyTypes_FileFilterInput,
  sort?: ?TGatsbyTypes_FileSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_directoryArgs = {|
  sourceInstanceName?: ?TGatsbyTypes_StringQueryOperatorInput,
  absolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  extension?: ?TGatsbyTypes_StringQueryOperatorInput,
  size?: ?TGatsbyTypes_IntQueryOperatorInput,
  prettySize?: ?TGatsbyTypes_StringQueryOperatorInput,
  modifiedTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  accessTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  changeTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  root?: ?TGatsbyTypes_StringQueryOperatorInput,
  dir?: ?TGatsbyTypes_StringQueryOperatorInput,
  base?: ?TGatsbyTypes_StringQueryOperatorInput,
  ext?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  relativeDirectory?: ?TGatsbyTypes_StringQueryOperatorInput,
  dev?: ?TGatsbyTypes_IntQueryOperatorInput,
  mode?: ?TGatsbyTypes_IntQueryOperatorInput,
  nlink?: ?TGatsbyTypes_IntQueryOperatorInput,
  uid?: ?TGatsbyTypes_IntQueryOperatorInput,
  gid?: ?TGatsbyTypes_IntQueryOperatorInput,
  rdev?: ?TGatsbyTypes_IntQueryOperatorInput,
  ino?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  mtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  ctimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  atime?: ?TGatsbyTypes_DateQueryOperatorInput,
  mtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  ctime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtime?: ?TGatsbyTypes_DateQueryOperatorInput,
  birthtimeMs?: ?TGatsbyTypes_FloatQueryOperatorInput,
  blksize?: ?TGatsbyTypes_IntQueryOperatorInput,
  blocks?: ?TGatsbyTypes_IntQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};


declare type TGatsbyTypes_Query_allDirectoryArgs = {|
  filter?: ?TGatsbyTypes_DirectoryFilterInput,
  sort?: ?TGatsbyTypes_DirectorySortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_siteArgs = {|
  buildTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  siteMetadata?: ?TGatsbyTypes_SiteSiteMetadataFilterInput,
  port?: ?TGatsbyTypes_IntQueryOperatorInput,
  host?: ?TGatsbyTypes_StringQueryOperatorInput,
  polyfill?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  pathPrefix?: ?TGatsbyTypes_StringQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};


declare type TGatsbyTypes_Query_allSiteArgs = {|
  filter?: ?TGatsbyTypes_SiteFilterInput,
  sort?: ?TGatsbyTypes_SiteSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_sitePageArgs = {|
  path?: ?TGatsbyTypes_StringQueryOperatorInput,
  component?: ?TGatsbyTypes_StringQueryOperatorInput,
  internalComponentName?: ?TGatsbyTypes_StringQueryOperatorInput,
  componentChunkName?: ?TGatsbyTypes_StringQueryOperatorInput,
  matchPath?: ?TGatsbyTypes_StringQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  context?: ?TGatsbyTypes_SitePageContextFilterInput,
  pluginCreator?: ?TGatsbyTypes_SitePluginFilterInput,
  pluginCreatorId?: ?TGatsbyTypes_StringQueryOperatorInput,
  componentPath?: ?TGatsbyTypes_StringQueryOperatorInput,
|};


declare type TGatsbyTypes_Query_allSitePageArgs = {|
  filter?: ?TGatsbyTypes_SitePageFilterInput,
  sort?: ?TGatsbyTypes_SitePageSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_imageSharpArgs = {|
  fixed?: ?TGatsbyTypes_ImageSharpFixedFilterInput,
  resolutions?: ?TGatsbyTypes_ImageSharpResolutionsFilterInput,
  fluid?: ?TGatsbyTypes_ImageSharpFluidFilterInput,
  sizes?: ?TGatsbyTypes_ImageSharpSizesFilterInput,
  gatsbyImage?: ?TGatsbyTypes_ImageSharpGatsbyImageFilterInput,
  original?: ?TGatsbyTypes_ImageSharpOriginalFilterInput,
  resize?: ?TGatsbyTypes_ImageSharpResizeFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};


declare type TGatsbyTypes_Query_allImageSharpArgs = {|
  filter?: ?TGatsbyTypes_ImageSharpFilterInput,
  sort?: ?TGatsbyTypes_ImageSharpSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_mdxArgs = {|
  rawBody?: ?TGatsbyTypes_StringQueryOperatorInput,
  fileAbsolutePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  frontmatter?: ?TGatsbyTypes_MdxFrontmatterFilterInput,
  slug?: ?TGatsbyTypes_StringQueryOperatorInput,
  body?: ?TGatsbyTypes_StringQueryOperatorInput,
  excerpt?: ?TGatsbyTypes_StringQueryOperatorInput,
  headings?: ?TGatsbyTypes_MdxHeadingMdxFilterListInput,
  html?: ?TGatsbyTypes_StringQueryOperatorInput,
  mdxAST?: ?TGatsbyTypes_JSONQueryOperatorInput,
  tableOfContents?: ?TGatsbyTypes_JSONQueryOperatorInput,
  timeToRead?: ?TGatsbyTypes_IntQueryOperatorInput,
  wordCount?: ?TGatsbyTypes_MdxWordCountFilterInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};


declare type TGatsbyTypes_Query_allMdxArgs = {|
  filter?: ?TGatsbyTypes_MdxFilterInput,
  sort?: ?TGatsbyTypes_MdxSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_contentJsonArgs = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  files?: ?TGatsbyTypes_StringQueryOperatorInput,
  imageSize?: ?TGatsbyTypes_IntQueryOperatorInput,
  commit?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  contributors?: ?TGatsbyTypes_ContentJsonContributorsFilterListInput,
  contributorsPerLine?: ?TGatsbyTypes_IntQueryOperatorInput,
  projectName?: ?TGatsbyTypes_StringQueryOperatorInput,
  projectOwner?: ?TGatsbyTypes_StringQueryOperatorInput,
  repoType?: ?TGatsbyTypes_StringQueryOperatorInput,
  repoHost?: ?TGatsbyTypes_StringQueryOperatorInput,
  skipCi?: ?TGatsbyTypes_BooleanQueryOperatorInput,
|};


declare type TGatsbyTypes_Query_allContentJsonArgs = {|
  filter?: ?TGatsbyTypes_ContentJsonFilterInput,
  sort?: ?TGatsbyTypes_ContentJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_enJsonArgs = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  Bug_Report?: ?TGatsbyTypes_StringQueryOperatorInput,
  Go_Back?: ?TGatsbyTypes_StringQueryOperatorInput,
  Language?: ?TGatsbyTypes_StringQueryOperatorInput,
  Flag?: ?TGatsbyTypes_StringQueryOperatorInput,
  Search?: ?TGatsbyTypes_StringQueryOperatorInput,
  No_Results?: ?TGatsbyTypes_StringQueryOperatorInput,
  Home?: ?TGatsbyTypes_StringQueryOperatorInput,
  Page_Language_Selector?: ?TGatsbyTypes_StringQueryOperatorInput,
  Available_Languages?: ?TGatsbyTypes_StringQueryOperatorInput,
  LANGUAGES?: ?TGatsbyTypes_StringQueryOperatorInput,
  Available_Languages_none?: ?TGatsbyTypes_StringQueryOperatorInput,
  Need_Another_Language?: ?TGatsbyTypes_StringQueryOperatorInput,
  Join_translation_team?: ?TGatsbyTypes_StringQueryOperatorInput,
  Translations?: ?TGatsbyTypes_StringQueryOperatorInput,
  Touts?: ?TGatsbyTypes_EnJsonToutsFilterInput,
  Back_To_Main_Menu?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MakerHomeIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MakerFooterLogo?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_GithubIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_TwitterIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_MediumIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_YoutubeIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_WeChatIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_TelegramIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_RedditIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_RocketChatIcon?: ?TGatsbyTypes_StringQueryOperatorInput,
  aria_ExternalWebsite?: ?TGatsbyTypes_StringQueryOperatorInput,
  Forum?: ?TGatsbyTypes_StringQueryOperatorInput,
  Chat?: ?TGatsbyTypes_StringQueryOperatorInput,
  NotFoundPage?: ?TGatsbyTypes_EnJsonNotFoundPageFilterInput,
  Footer?: ?TGatsbyTypes_EnJsonFooterFilterInput,
  Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Back_To_Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Blog_Language_Selector?: ?TGatsbyTypes_StringQueryOperatorInput,
  editorial?: ?TGatsbyTypes_StringQueryOperatorInput,
  community?: ?TGatsbyTypes_StringQueryOperatorInput,
  governance?: ?TGatsbyTypes_StringQueryOperatorInput,
  Maker_Community_Blog?: ?TGatsbyTypes_StringQueryOperatorInput,
  Latest_In?: ?TGatsbyTypes_StringQueryOperatorInput,
  See_More_Posts?: ?TGatsbyTypes_StringQueryOperatorInput,
|};


declare type TGatsbyTypes_Query_allEnJsonArgs = {|
  filter?: ?TGatsbyTypes_EnJsonFilterInput,
  sort?: ?TGatsbyTypes_EnJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_siteBuildMetadataArgs = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  buildTime?: ?TGatsbyTypes_DateQueryOperatorInput,
|};


declare type TGatsbyTypes_Query_allSiteBuildMetadataArgs = {|
  filter?: ?TGatsbyTypes_SiteBuildMetadataFilterInput,
  sort?: ?TGatsbyTypes_SiteBuildMetadataSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};


declare type TGatsbyTypes_Query_sitePluginArgs = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  resolve?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
  pluginOptions?: ?TGatsbyTypes_SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  browserAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  ssrAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  pluginFilepath?: ?TGatsbyTypes_StringQueryOperatorInput,
  packageJson?: ?TGatsbyTypes_SitePluginPackageJsonFilterInput,
|};


declare type TGatsbyTypes_Query_allSitePluginArgs = {|
  filter?: ?TGatsbyTypes_SitePluginFilterInput,
  sort?: ?TGatsbyTypes_SitePluginSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_Site = {|
  ...TGatsbyTypes_Node,
  ...{|
    +buildTime?: ?$ElementType<Scalars, 'Date'>,
    +siteMetadata?: ?TGatsbyTypes_SiteSiteMetadata,
    +port?: ?$ElementType<Scalars, 'Int'>,
    +host?: ?$ElementType<Scalars, 'String'>,
    +polyfill?: ?$ElementType<Scalars, 'Boolean'>,
    +pathPrefix?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
  |}
|};


declare type TGatsbyTypes_Site_buildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SiteBuildMetadata = {|
  ...TGatsbyTypes_Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +buildTime?: ?$ElementType<Scalars, 'Date'>,
  |}
|};


declare type TGatsbyTypes_SiteBuildMetadata_buildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SiteBuildMetadataConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SiteBuildMetadataEdge>,
  +nodes: Array<TGatsbyTypes_SiteBuildMetadata>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_SiteBuildMetadataGroupConnection>,
|};


declare type TGatsbyTypes_SiteBuildMetadataConnection_distinctArgs = {|
  field: TGatsbyTypes_SiteBuildMetadataFieldsEnum,
|};


declare type TGatsbyTypes_SiteBuildMetadataConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_SiteBuildMetadataFieldsEnum,
|};

declare type TGatsbyTypes_SiteBuildMetadataEdge = {|
  +next?: ?TGatsbyTypes_SiteBuildMetadata,
  +node: TGatsbyTypes_SiteBuildMetadata,
  +previous?: ?TGatsbyTypes_SiteBuildMetadata,
|};

export const TGatsbyTypes_SiteBuildMetadataFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  buildTime: 'buildTime'
});


declare type TGatsbyTypes_SiteBuildMetadataFieldsEnum = $Values<typeof TGatsbyTypes_SiteBuildMetadataFieldsEnumValues>;

declare type TGatsbyTypes_SiteBuildMetadataFilterInput = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  buildTime?: ?TGatsbyTypes_DateQueryOperatorInput,
|};

declare type TGatsbyTypes_SiteBuildMetadataGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SiteBuildMetadataEdge>,
  +nodes: Array<TGatsbyTypes_SiteBuildMetadata>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SiteBuildMetadataSortInput = {|
  fields?: ?Array<?SiteBuildMetadataFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_SiteConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SiteEdge>,
  +nodes: Array<TGatsbyTypes_Site>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_SiteGroupConnection>,
|};


declare type TGatsbyTypes_SiteConnection_distinctArgs = {|
  field: TGatsbyTypes_SiteFieldsEnum,
|};


declare type TGatsbyTypes_SiteConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_SiteFieldsEnum,
|};

declare type TGatsbyTypes_SiteEdge = {|
  +next?: ?TGatsbyTypes_Site,
  +node: TGatsbyTypes_Site,
  +previous?: ?TGatsbyTypes_Site,
|};

export const TGatsbyTypes_SiteFieldsEnumValues = Object.freeze({
  buildTime: 'buildTime',
  siteMetadata___title: 'siteMetadata.title',
  siteMetadata___description: 'siteMetadata.description',
  siteMetadata___author: 'siteMetadata.author',
  siteMetadata___copyright: 'siteMetadata.copyright',
  siteMetadata___siteUrl: 'siteMetadata.siteUrl',
  port: 'port',
  host: 'host',
  polyfill: 'polyfill',
  pathPrefix: 'pathPrefix',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type'
});


declare type TGatsbyTypes_SiteFieldsEnum = $Values<typeof TGatsbyTypes_SiteFieldsEnumValues>;

declare type TGatsbyTypes_SiteFilterInput = {|
  buildTime?: ?TGatsbyTypes_DateQueryOperatorInput,
  siteMetadata?: ?TGatsbyTypes_SiteSiteMetadataFilterInput,
  port?: ?TGatsbyTypes_IntQueryOperatorInput,
  host?: ?TGatsbyTypes_StringQueryOperatorInput,
  polyfill?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  pathPrefix?: ?TGatsbyTypes_StringQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
|};

declare type TGatsbyTypes_SiteGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SiteEdge>,
  +nodes: Array<TGatsbyTypes_Site>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePage = {|
  ...TGatsbyTypes_Node,
  ...{|
    +path: $ElementType<Scalars, 'String'>,
    +component: $ElementType<Scalars, 'String'>,
    +internalComponentName: $ElementType<Scalars, 'String'>,
    +componentChunkName: $ElementType<Scalars, 'String'>,
    +matchPath?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +isCreatedByStatefulCreatePages?: ?$ElementType<Scalars, 'Boolean'>,
    +context?: ?TGatsbyTypes_SitePageContext,
    +pluginCreator?: ?TGatsbyTypes_SitePlugin,
    +pluginCreatorId?: ?$ElementType<Scalars, 'String'>,
    +componentPath?: ?$ElementType<Scalars, 'String'>,
  |}
|};

declare type TGatsbyTypes_SitePageConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SitePageEdge>,
  +nodes: Array<TGatsbyTypes_SitePage>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_SitePageGroupConnection>,
|};


declare type TGatsbyTypes_SitePageConnection_distinctArgs = {|
  field: TGatsbyTypes_SitePageFieldsEnum,
|};


declare type TGatsbyTypes_SitePageConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_SitePageFieldsEnum,
|};

declare type TGatsbyTypes_SitePageContext = {|
  +locale?: ?$ElementType<Scalars, 'String'>,
  +pagePath?: ?$ElementType<Scalars, 'String'>,
  +frontmatter?: ?TGatsbyTypes_SitePageContextFrontmatter,
  +regex?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePageContextFilterInput = {|
  locale?: ?TGatsbyTypes_StringQueryOperatorInput,
  pagePath?: ?TGatsbyTypes_StringQueryOperatorInput,
  frontmatter?: ?TGatsbyTypes_SitePageContextFrontmatterFilterInput,
  regex?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePageContextFrontmatter = {|
  +title?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +keywords?: ?$ElementType<Scalars, 'String'>,
  +featuredImage?: ?$ElementType<Scalars, 'String'>,
  +hideBreadcrumbs?: ?$ElementType<Scalars, 'Boolean'>,
  +hideScrollCTA?: ?$ElementType<Scalars, 'Boolean'>,
  +header?: ?$ElementType<Scalars, 'Boolean'>,
  +headerOrder?: ?$ElementType<Scalars, 'Int'>,
  +hideLanguageSelector?: ?$ElementType<Scalars, 'Boolean'>,
  +order?: ?$ElementType<Scalars, 'Int'>,
  +redirect_from?: ?Array<?$ElementType<Scalars, 'String'>>,
  +authors?: ?Array<?$ElementType<Scalars, 'String'>>,
  +date?: ?$ElementType<Scalars, 'Date'>,
  +image?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePageContextFrontmatterFilterInput = {|
  title?: ?TGatsbyTypes_StringQueryOperatorInput,
  description?: ?TGatsbyTypes_StringQueryOperatorInput,
  keywords?: ?TGatsbyTypes_StringQueryOperatorInput,
  featuredImage?: ?TGatsbyTypes_StringQueryOperatorInput,
  hideBreadcrumbs?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  hideScrollCTA?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  header?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  headerOrder?: ?TGatsbyTypes_IntQueryOperatorInput,
  hideLanguageSelector?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  order?: ?TGatsbyTypes_IntQueryOperatorInput,
  redirect_from?: ?TGatsbyTypes_StringQueryOperatorInput,
  authors?: ?TGatsbyTypes_StringQueryOperatorInput,
  date?: ?TGatsbyTypes_DateQueryOperatorInput,
  image?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePageEdge = {|
  +next?: ?TGatsbyTypes_SitePage,
  +node: TGatsbyTypes_SitePage,
  +previous?: ?TGatsbyTypes_SitePage,
|};

export const TGatsbyTypes_SitePageFieldsEnumValues = Object.freeze({
  path: 'path',
  component: 'component',
  internalComponentName: 'internalComponentName',
  componentChunkName: 'componentChunkName',
  matchPath: 'matchPath',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  isCreatedByStatefulCreatePages: 'isCreatedByStatefulCreatePages',
  context___locale: 'context.locale',
  context___pagePath: 'context.pagePath',
  context___frontmatter___title: 'context.frontmatter.title',
  context___frontmatter___description: 'context.frontmatter.description',
  context___frontmatter___keywords: 'context.frontmatter.keywords',
  context___frontmatter___featuredImage: 'context.frontmatter.featuredImage',
  context___frontmatter___hideBreadcrumbs: 'context.frontmatter.hideBreadcrumbs',
  context___frontmatter___hideScrollCTA: 'context.frontmatter.hideScrollCTA',
  context___frontmatter___header: 'context.frontmatter.header',
  context___frontmatter___headerOrder: 'context.frontmatter.headerOrder',
  context___frontmatter___hideLanguageSelector: 'context.frontmatter.hideLanguageSelector',
  context___frontmatter___order: 'context.frontmatter.order',
  context___frontmatter___redirect_from: 'context.frontmatter.redirect_from',
  context___frontmatter___authors: 'context.frontmatter.authors',
  context___frontmatter___date: 'context.frontmatter.date',
  context___frontmatter___image: 'context.frontmatter.image',
  context___regex: 'context.regex',
  pluginCreator___id: 'pluginCreator.id',
  pluginCreator___parent___id: 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id: 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children: 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children: 'pluginCreator.parent.children',
  pluginCreator___parent___children___id: 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children: 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content: 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest: 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description: 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners: 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType: 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType: 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner: 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type: 'pluginCreator.parent.internal.type',
  pluginCreator___children: 'pluginCreator.children',
  pluginCreator___children___id: 'pluginCreator.children.id',
  pluginCreator___children___parent___id: 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children: 'pluginCreator.children.parent.children',
  pluginCreator___children___children: 'pluginCreator.children.children',
  pluginCreator___children___children___id: 'pluginCreator.children.children.id',
  pluginCreator___children___children___children: 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content: 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest: 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description: 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners: 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType: 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType: 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner: 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type: 'pluginCreator.children.internal.type',
  pluginCreator___internal___content: 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest: 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description: 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners: 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType: 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType: 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner: 'pluginCreator.internal.owner',
  pluginCreator___internal___type: 'pluginCreator.internal.type',
  pluginCreator___resolve: 'pluginCreator.resolve',
  pluginCreator___name: 'pluginCreator.name',
  pluginCreator___version: 'pluginCreator.version',
  pluginCreator___pluginOptions___language: 'pluginCreator.pluginOptions.language',
  pluginCreator___pluginOptions___outputPath: 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___namespace: 'pluginCreator.pluginOptions.namespace',
  pluginCreator___pluginOptions___alias____atoms: 'pluginCreator.pluginOptions.alias._atoms',
  pluginCreator___pluginOptions___alias____molecules: 'pluginCreator.pluginOptions.alias._molecules',
  pluginCreator___pluginOptions___alias____templates: 'pluginCreator.pluginOptions.alias._templates',
  pluginCreator___pluginOptions___alias____layouts: 'pluginCreator.pluginOptions.alias._layouts',
  pluginCreator___pluginOptions___alias____styles: 'pluginCreator.pluginOptions.alias._styles',
  pluginCreator___pluginOptions___alias____modules: 'pluginCreator.pluginOptions.alias._modules',
  pluginCreator___pluginOptions___alias____data: 'pluginCreator.pluginOptions.alias._data',
  pluginCreator___pluginOptions___alias____src: 'pluginCreator.pluginOptions.alias._src',
  pluginCreator___pluginOptions___alias____utils: 'pluginCreator.pluginOptions.alias._utils',
  pluginCreator___pluginOptions___alias____pages: 'pluginCreator.pluginOptions.alias._pages',
  pluginCreator___pluginOptions___alias____images: 'pluginCreator.pluginOptions.alias._images',
  pluginCreator___pluginOptions___alias____content: 'pluginCreator.pluginOptions.alias._content',
  pluginCreator___pluginOptions___extensions: 'pluginCreator.pluginOptions.extensions',
  pluginCreator___pluginOptions___name: 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path: 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___ignore___patterns: 'pluginCreator.pluginOptions.ignore.patterns',
  pluginCreator___pluginOptions___query: 'pluginCreator.pluginOptions.query',
  pluginCreator___pluginOptions___output: 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead: 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___base64Width: 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___stripMetadata: 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality: 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___failOnError: 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___maxWidth: 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal: 'pluginCreator.pluginOptions.linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions: 'pluginCreator.pluginOptions.showCaptions',
  pluginCreator___pluginOptions___markdownCaptions: 'pluginCreator.pluginOptions.markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity: 'pluginCreator.pluginOptions.sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor: 'pluginCreator.pluginOptions.backgroundColor',
  pluginCreator___pluginOptions___quality: 'pluginCreator.pluginOptions.quality',
  pluginCreator___pluginOptions___withWebp: 'pluginCreator.pluginOptions.withWebp',
  pluginCreator___pluginOptions___tracedSVG: 'pluginCreator.pluginOptions.tracedSVG',
  pluginCreator___pluginOptions___loading: 'pluginCreator.pluginOptions.loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha: 'pluginCreator.pluginOptions.disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage: 'pluginCreator.pluginOptions.disableBgImage',
  pluginCreator___pluginOptions___defaultLayouts___default: 'pluginCreator.pluginOptions.defaultLayouts.default',
  pluginCreator___pluginOptions___defaultLayouts___blogPosts: 'pluginCreator.pluginOptions.defaultLayouts.blogPosts',
  pluginCreator___pluginOptions___mediaTypes: 'pluginCreator.pluginOptions.mediaTypes',
  pluginCreator___pluginOptions___languages: 'pluginCreator.pluginOptions.languages',
  pluginCreator___pluginOptions___languages___name: 'pluginCreator.pluginOptions.languages.name',
  pluginCreator___pluginOptions___fields: 'pluginCreator.pluginOptions.fields',
  pluginCreator___pluginOptions___fields___name: 'pluginCreator.pluginOptions.fields.name',
  pluginCreator___pluginOptions___fields___store: 'pluginCreator.pluginOptions.fields.store',
  pluginCreator___pluginOptions___filename: 'pluginCreator.pluginOptions.filename',
  pluginCreator___pluginOptions___fetchOptions___credentials: 'pluginCreator.pluginOptions.fetchOptions.credentials',
  pluginCreator___pluginOptions___head: 'pluginCreator.pluginOptions.head',
  pluginCreator___pluginOptions___anonymize: 'pluginCreator.pluginOptions.anonymize',
  pluginCreator___pluginOptions___respectDNT: 'pluginCreator.pluginOptions.respectDNT',
  pluginCreator___pluginOptions___exclude: 'pluginCreator.pluginOptions.exclude',
  pluginCreator___pluginOptions___pageTransitionDelay: 'pluginCreator.pluginOptions.pageTransitionDelay',
  pluginCreator___pluginOptions___defer: 'pluginCreator.pluginOptions.defer',
  pluginCreator___pluginOptions___short_name: 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url: 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color: 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color: 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display: 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___include_favicon: 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___icon: 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___cache_busting_mode: 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___theme_color_in_head: 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___legacy: 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___workboxConfig___globPatterns: 'pluginCreator.pluginOptions.workboxConfig.globPatterns',
  pluginCreator___pluginOptions___pathCheck: 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions: 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX: 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma: 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs: 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs: 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs: 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath: 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name: 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description: 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version: 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main: 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license: 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies: 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name: 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version: 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies: 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name: 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version: 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies: 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name: 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version: 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords: 'pluginCreator.packageJson.keywords',
  pluginCreatorId: 'pluginCreatorId',
  componentPath: 'componentPath'
});


declare type TGatsbyTypes_SitePageFieldsEnum = $Values<typeof TGatsbyTypes_SitePageFieldsEnumValues>;

declare type TGatsbyTypes_SitePageFilterInput = {|
  path?: ?TGatsbyTypes_StringQueryOperatorInput,
  component?: ?TGatsbyTypes_StringQueryOperatorInput,
  internalComponentName?: ?TGatsbyTypes_StringQueryOperatorInput,
  componentChunkName?: ?TGatsbyTypes_StringQueryOperatorInput,
  matchPath?: ?TGatsbyTypes_StringQueryOperatorInput,
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  context?: ?TGatsbyTypes_SitePageContextFilterInput,
  pluginCreator?: ?TGatsbyTypes_SitePluginFilterInput,
  pluginCreatorId?: ?TGatsbyTypes_StringQueryOperatorInput,
  componentPath?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePageGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SitePageEdge>,
  +nodes: Array<TGatsbyTypes_SitePage>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePageSortInput = {|
  fields?: ?Array<?SitePageFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_SitePlugin = {|
  ...TGatsbyTypes_Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?TGatsbyTypes_Node,
    +children: Array<TGatsbyTypes_Node>,
    +internal: TGatsbyTypes_Internal,
    +resolve?: ?$ElementType<Scalars, 'String'>,
    +name?: ?$ElementType<Scalars, 'String'>,
    +version?: ?$ElementType<Scalars, 'String'>,
    +pluginOptions?: ?TGatsbyTypes_SitePluginPluginOptions,
    +nodeAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +browserAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +ssrAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +pluginFilepath?: ?$ElementType<Scalars, 'String'>,
    +packageJson?: ?TGatsbyTypes_SitePluginPackageJson,
  |}
|};

declare type TGatsbyTypes_SitePluginConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SitePluginEdge>,
  +nodes: Array<TGatsbyTypes_SitePlugin>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<TGatsbyTypes_SitePluginGroupConnection>,
|};


declare type TGatsbyTypes_SitePluginConnection_distinctArgs = {|
  field: TGatsbyTypes_SitePluginFieldsEnum,
|};


declare type TGatsbyTypes_SitePluginConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: TGatsbyTypes_SitePluginFieldsEnum,
|};

declare type TGatsbyTypes_SitePluginEdge = {|
  +next?: ?TGatsbyTypes_SitePlugin,
  +node: TGatsbyTypes_SitePlugin,
  +previous?: ?TGatsbyTypes_SitePlugin,
|};

export const TGatsbyTypes_SitePluginFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  resolve: 'resolve',
  name: 'name',
  version: 'version',
  pluginOptions___language: 'pluginOptions.language',
  pluginOptions___outputPath: 'pluginOptions.outputPath',
  pluginOptions___namespace: 'pluginOptions.namespace',
  pluginOptions___alias____atoms: 'pluginOptions.alias._atoms',
  pluginOptions___alias____molecules: 'pluginOptions.alias._molecules',
  pluginOptions___alias____templates: 'pluginOptions.alias._templates',
  pluginOptions___alias____layouts: 'pluginOptions.alias._layouts',
  pluginOptions___alias____styles: 'pluginOptions.alias._styles',
  pluginOptions___alias____modules: 'pluginOptions.alias._modules',
  pluginOptions___alias____data: 'pluginOptions.alias._data',
  pluginOptions___alias____src: 'pluginOptions.alias._src',
  pluginOptions___alias____utils: 'pluginOptions.alias._utils',
  pluginOptions___alias____pages: 'pluginOptions.alias._pages',
  pluginOptions___alias____images: 'pluginOptions.alias._images',
  pluginOptions___alias____content: 'pluginOptions.alias._content',
  pluginOptions___extensions: 'pluginOptions.extensions',
  pluginOptions___name: 'pluginOptions.name',
  pluginOptions___path: 'pluginOptions.path',
  pluginOptions___ignore___patterns: 'pluginOptions.ignore.patterns',
  pluginOptions___ignore___options___nocase: 'pluginOptions.ignore.options.nocase',
  pluginOptions___query: 'pluginOptions.query',
  pluginOptions___output: 'pluginOptions.output',
  pluginOptions___createLinkInHead: 'pluginOptions.createLinkInHead',
  pluginOptions___base64Width: 'pluginOptions.base64Width',
  pluginOptions___stripMetadata: 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality: 'pluginOptions.defaultQuality',
  pluginOptions___failOnError: 'pluginOptions.failOnError',
  pluginOptions___maxWidth: 'pluginOptions.maxWidth',
  pluginOptions___linkImagesToOriginal: 'pluginOptions.linkImagesToOriginal',
  pluginOptions___showCaptions: 'pluginOptions.showCaptions',
  pluginOptions___markdownCaptions: 'pluginOptions.markdownCaptions',
  pluginOptions___sizeByPixelDensity: 'pluginOptions.sizeByPixelDensity',
  pluginOptions___backgroundColor: 'pluginOptions.backgroundColor',
  pluginOptions___quality: 'pluginOptions.quality',
  pluginOptions___withWebp: 'pluginOptions.withWebp',
  pluginOptions___tracedSVG: 'pluginOptions.tracedSVG',
  pluginOptions___loading: 'pluginOptions.loading',
  pluginOptions___disableBgImageOnAlpha: 'pluginOptions.disableBgImageOnAlpha',
  pluginOptions___disableBgImage: 'pluginOptions.disableBgImage',
  pluginOptions___defaultLayouts___default: 'pluginOptions.defaultLayouts.default',
  pluginOptions___defaultLayouts___blogPosts: 'pluginOptions.defaultLayouts.blogPosts',
  pluginOptions___mediaTypes: 'pluginOptions.mediaTypes',
  pluginOptions___languages: 'pluginOptions.languages',
  pluginOptions___languages___name: 'pluginOptions.languages.name',
  pluginOptions___fields: 'pluginOptions.fields',
  pluginOptions___fields___name: 'pluginOptions.fields.name',
  pluginOptions___fields___store: 'pluginOptions.fields.store',
  pluginOptions___fields___attributes___boost: 'pluginOptions.fields.attributes.boost',
  pluginOptions___filename: 'pluginOptions.filename',
  pluginOptions___fetchOptions___credentials: 'pluginOptions.fetchOptions.credentials',
  pluginOptions___head: 'pluginOptions.head',
  pluginOptions___anonymize: 'pluginOptions.anonymize',
  pluginOptions___respectDNT: 'pluginOptions.respectDNT',
  pluginOptions___exclude: 'pluginOptions.exclude',
  pluginOptions___pageTransitionDelay: 'pluginOptions.pageTransitionDelay',
  pluginOptions___defer: 'pluginOptions.defer',
  pluginOptions___short_name: 'pluginOptions.short_name',
  pluginOptions___start_url: 'pluginOptions.start_url',
  pluginOptions___background_color: 'pluginOptions.background_color',
  pluginOptions___theme_color: 'pluginOptions.theme_color',
  pluginOptions___display: 'pluginOptions.display',
  pluginOptions___include_favicon: 'pluginOptions.include_favicon',
  pluginOptions___icon: 'pluginOptions.icon',
  pluginOptions___cache_busting_mode: 'pluginOptions.cache_busting_mode',
  pluginOptions___theme_color_in_head: 'pluginOptions.theme_color_in_head',
  pluginOptions___legacy: 'pluginOptions.legacy',
  pluginOptions___workboxConfig___globPatterns: 'pluginOptions.workboxConfig.globPatterns',
  pluginOptions___pathCheck: 'pluginOptions.pathCheck',
  pluginOptions___allExtensions: 'pluginOptions.allExtensions',
  pluginOptions___isTSX: 'pluginOptions.isTSX',
  pluginOptions___jsxPragma: 'pluginOptions.jsxPragma',
  nodeAPIs: 'nodeAPIs',
  browserAPIs: 'browserAPIs',
  ssrAPIs: 'ssrAPIs',
  pluginFilepath: 'pluginFilepath',
  packageJson___name: 'packageJson.name',
  packageJson___description: 'packageJson.description',
  packageJson___version: 'packageJson.version',
  packageJson___main: 'packageJson.main',
  packageJson___license: 'packageJson.license',
  packageJson___dependencies: 'packageJson.dependencies',
  packageJson___dependencies___name: 'packageJson.dependencies.name',
  packageJson___dependencies___version: 'packageJson.dependencies.version',
  packageJson___devDependencies: 'packageJson.devDependencies',
  packageJson___devDependencies___name: 'packageJson.devDependencies.name',
  packageJson___devDependencies___version: 'packageJson.devDependencies.version',
  packageJson___peerDependencies: 'packageJson.peerDependencies',
  packageJson___peerDependencies___name: 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version: 'packageJson.peerDependencies.version',
  packageJson___keywords: 'packageJson.keywords'
});


declare type TGatsbyTypes_SitePluginFieldsEnum = $Values<typeof TGatsbyTypes_SitePluginFieldsEnumValues>;

declare type TGatsbyTypes_SitePluginFilterInput = {|
  id?: ?TGatsbyTypes_StringQueryOperatorInput,
  parent?: ?TGatsbyTypes_NodeFilterInput,
  children?: ?TGatsbyTypes_NodeFilterListInput,
  internal?: ?TGatsbyTypes_InternalFilterInput,
  resolve?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
  pluginOptions?: ?TGatsbyTypes_SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  browserAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  ssrAPIs?: ?TGatsbyTypes_StringQueryOperatorInput,
  pluginFilepath?: ?TGatsbyTypes_StringQueryOperatorInput,
  packageJson?: ?TGatsbyTypes_SitePluginPackageJsonFilterInput,
|};

declare type TGatsbyTypes_SitePluginGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<TGatsbyTypes_SitePluginEdge>,
  +nodes: Array<TGatsbyTypes_SitePlugin>,
  +pageInfo: TGatsbyTypes_PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPackageJson = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
  +main?: ?$ElementType<Scalars, 'String'>,
  +license?: ?$ElementType<Scalars, 'String'>,
  +dependencies?: ?Array<?TGatsbyTypes_SitePluginPackageJsonDependencies>,
  +devDependencies?: ?Array<?TGatsbyTypes_SitePluginPackageJsonDevDependencies>,
  +peerDependencies?: ?Array<?TGatsbyTypes_SitePluginPackageJsonPeerDependencies>,
  +keywords?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDependenciesFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDependenciesFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_SitePluginPackageJsonDependenciesFilterInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDevDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDevDependenciesFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonDevDependenciesFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_SitePluginPackageJsonDevDependenciesFilterInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  description?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
  main?: ?TGatsbyTypes_StringQueryOperatorInput,
  license?: ?TGatsbyTypes_StringQueryOperatorInput,
  dependencies?: ?TGatsbyTypes_SitePluginPackageJsonDependenciesFilterListInput,
  devDependencies?: ?TGatsbyTypes_SitePluginPackageJsonDevDependenciesFilterListInput,
  peerDependencies?: ?TGatsbyTypes_SitePluginPackageJsonPeerDependenciesFilterListInput,
  keywords?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonPeerDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPackageJsonPeerDependenciesFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  version?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPackageJsonPeerDependenciesFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_SitePluginPackageJsonPeerDependenciesFilterInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptions = {|
  +language?: ?$ElementType<Scalars, 'String'>,
  +outputPath?: ?$ElementType<Scalars, 'String'>,
  +namespace?: ?$ElementType<Scalars, 'String'>,
  +alias?: ?TGatsbyTypes_SitePluginPluginOptionsAlias,
  +extensions?: ?Array<?$ElementType<Scalars, 'String'>>,
  +name?: ?$ElementType<Scalars, 'String'>,
  +path?: ?$ElementType<Scalars, 'String'>,
  +ignore?: ?TGatsbyTypes_SitePluginPluginOptionsIgnore,
  +query?: ?$ElementType<Scalars, 'String'>,
  +output?: ?$ElementType<Scalars, 'String'>,
  +createLinkInHead?: ?$ElementType<Scalars, 'Boolean'>,
  +base64Width?: ?$ElementType<Scalars, 'Int'>,
  +stripMetadata?: ?$ElementType<Scalars, 'Boolean'>,
  +defaultQuality?: ?$ElementType<Scalars, 'Int'>,
  +failOnError?: ?$ElementType<Scalars, 'Boolean'>,
  +maxWidth?: ?$ElementType<Scalars, 'Int'>,
  +linkImagesToOriginal?: ?$ElementType<Scalars, 'Boolean'>,
  +showCaptions?: ?$ElementType<Scalars, 'Boolean'>,
  +markdownCaptions?: ?$ElementType<Scalars, 'Boolean'>,
  +sizeByPixelDensity?: ?$ElementType<Scalars, 'Boolean'>,
  +backgroundColor?: ?$ElementType<Scalars, 'String'>,
  +quality?: ?$ElementType<Scalars, 'Int'>,
  +withWebp?: ?$ElementType<Scalars, 'Boolean'>,
  +tracedSVG?: ?$ElementType<Scalars, 'Boolean'>,
  +loading?: ?$ElementType<Scalars, 'String'>,
  +disableBgImageOnAlpha?: ?$ElementType<Scalars, 'Boolean'>,
  +disableBgImage?: ?$ElementType<Scalars, 'Boolean'>,
  +defaultLayouts?: ?TGatsbyTypes_SitePluginPluginOptionsDefaultLayouts,
  +mediaTypes?: ?Array<?$ElementType<Scalars, 'String'>>,
  +languages?: ?Array<?TGatsbyTypes_SitePluginPluginOptionsLanguages>,
  +fields?: ?Array<?TGatsbyTypes_SitePluginPluginOptionsFields>,
  +filename?: ?$ElementType<Scalars, 'String'>,
  +fetchOptions?: ?TGatsbyTypes_SitePluginPluginOptionsFetchOptions,
  +head?: ?$ElementType<Scalars, 'Boolean'>,
  +anonymize?: ?$ElementType<Scalars, 'Boolean'>,
  +respectDNT?: ?$ElementType<Scalars, 'Boolean'>,
  +exclude?: ?Array<?$ElementType<Scalars, 'String'>>,
  +pageTransitionDelay?: ?$ElementType<Scalars, 'Int'>,
  +defer?: ?$ElementType<Scalars, 'Boolean'>,
  +short_name?: ?$ElementType<Scalars, 'String'>,
  +start_url?: ?$ElementType<Scalars, 'String'>,
  +background_color?: ?$ElementType<Scalars, 'String'>,
  +theme_color?: ?$ElementType<Scalars, 'String'>,
  +display?: ?$ElementType<Scalars, 'String'>,
  +include_favicon?: ?$ElementType<Scalars, 'Boolean'>,
  +icon?: ?$ElementType<Scalars, 'String'>,
  +cache_busting_mode?: ?$ElementType<Scalars, 'String'>,
  +theme_color_in_head?: ?$ElementType<Scalars, 'Boolean'>,
  +legacy?: ?$ElementType<Scalars, 'Boolean'>,
  +workboxConfig?: ?TGatsbyTypes_SitePluginPluginOptionsWorkboxConfig,
  +pathCheck?: ?$ElementType<Scalars, 'Boolean'>,
  +allExtensions?: ?$ElementType<Scalars, 'Boolean'>,
  +isTSX?: ?$ElementType<Scalars, 'Boolean'>,
  +jsxPragma?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsAlias = {|
  +_atoms?: ?$ElementType<Scalars, 'String'>,
  +_molecules?: ?$ElementType<Scalars, 'String'>,
  +_templates?: ?$ElementType<Scalars, 'String'>,
  +_layouts?: ?$ElementType<Scalars, 'String'>,
  +_styles?: ?$ElementType<Scalars, 'String'>,
  +_modules?: ?$ElementType<Scalars, 'String'>,
  +_data?: ?$ElementType<Scalars, 'String'>,
  +_src?: ?$ElementType<Scalars, 'String'>,
  +_utils?: ?$ElementType<Scalars, 'String'>,
  +_pages?: ?$ElementType<Scalars, 'String'>,
  +_images?: ?$ElementType<Scalars, 'String'>,
  +_content?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsAliasFilterInput = {|
  _atoms?: ?TGatsbyTypes_StringQueryOperatorInput,
  _molecules?: ?TGatsbyTypes_StringQueryOperatorInput,
  _templates?: ?TGatsbyTypes_StringQueryOperatorInput,
  _layouts?: ?TGatsbyTypes_StringQueryOperatorInput,
  _styles?: ?TGatsbyTypes_StringQueryOperatorInput,
  _modules?: ?TGatsbyTypes_StringQueryOperatorInput,
  _data?: ?TGatsbyTypes_StringQueryOperatorInput,
  _src?: ?TGatsbyTypes_StringQueryOperatorInput,
  _utils?: ?TGatsbyTypes_StringQueryOperatorInput,
  _pages?: ?TGatsbyTypes_StringQueryOperatorInput,
  _images?: ?TGatsbyTypes_StringQueryOperatorInput,
  _content?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsDefaultLayouts = {|
  +default?: ?$ElementType<Scalars, 'String'>,
  +blogPosts?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsDefaultLayoutsFilterInput = {|
  default?: ?TGatsbyTypes_StringQueryOperatorInput,
  blogPosts?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFetchOptions = {|
  +credentials?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFetchOptionsFilterInput = {|
  credentials?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFields = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +store?: ?$ElementType<Scalars, 'Boolean'>,
  +attributes?: ?TGatsbyTypes_SitePluginPluginOptionsFieldsAttributes,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFieldsAttributes = {|
  +boost?: ?$ElementType<Scalars, 'Int'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFieldsAttributesFilterInput = {|
  boost?: ?TGatsbyTypes_IntQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFieldsFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  store?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  attributes?: ?TGatsbyTypes_SitePluginPluginOptionsFieldsAttributesFilterInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFieldsFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_SitePluginPluginOptionsFieldsFilterInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsFilterInput = {|
  language?: ?TGatsbyTypes_StringQueryOperatorInput,
  outputPath?: ?TGatsbyTypes_StringQueryOperatorInput,
  namespace?: ?TGatsbyTypes_StringQueryOperatorInput,
  alias?: ?TGatsbyTypes_SitePluginPluginOptionsAliasFilterInput,
  extensions?: ?TGatsbyTypes_StringQueryOperatorInput,
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
  path?: ?TGatsbyTypes_StringQueryOperatorInput,
  ignore?: ?TGatsbyTypes_SitePluginPluginOptionsIgnoreFilterInput,
  query?: ?TGatsbyTypes_StringQueryOperatorInput,
  output?: ?TGatsbyTypes_StringQueryOperatorInput,
  createLinkInHead?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  base64Width?: ?TGatsbyTypes_IntQueryOperatorInput,
  stripMetadata?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  defaultQuality?: ?TGatsbyTypes_IntQueryOperatorInput,
  failOnError?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  maxWidth?: ?TGatsbyTypes_IntQueryOperatorInput,
  linkImagesToOriginal?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  showCaptions?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  markdownCaptions?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  sizeByPixelDensity?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  backgroundColor?: ?TGatsbyTypes_StringQueryOperatorInput,
  quality?: ?TGatsbyTypes_IntQueryOperatorInput,
  withWebp?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  tracedSVG?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  loading?: ?TGatsbyTypes_StringQueryOperatorInput,
  disableBgImageOnAlpha?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  disableBgImage?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  defaultLayouts?: ?TGatsbyTypes_SitePluginPluginOptionsDefaultLayoutsFilterInput,
  mediaTypes?: ?TGatsbyTypes_StringQueryOperatorInput,
  languages?: ?TGatsbyTypes_SitePluginPluginOptionsLanguagesFilterListInput,
  fields?: ?TGatsbyTypes_SitePluginPluginOptionsFieldsFilterListInput,
  filename?: ?TGatsbyTypes_StringQueryOperatorInput,
  fetchOptions?: ?TGatsbyTypes_SitePluginPluginOptionsFetchOptionsFilterInput,
  head?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  anonymize?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  respectDNT?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  exclude?: ?TGatsbyTypes_StringQueryOperatorInput,
  pageTransitionDelay?: ?TGatsbyTypes_IntQueryOperatorInput,
  defer?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  short_name?: ?TGatsbyTypes_StringQueryOperatorInput,
  start_url?: ?TGatsbyTypes_StringQueryOperatorInput,
  background_color?: ?TGatsbyTypes_StringQueryOperatorInput,
  theme_color?: ?TGatsbyTypes_StringQueryOperatorInput,
  display?: ?TGatsbyTypes_StringQueryOperatorInput,
  include_favicon?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  icon?: ?TGatsbyTypes_StringQueryOperatorInput,
  cache_busting_mode?: ?TGatsbyTypes_StringQueryOperatorInput,
  theme_color_in_head?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  legacy?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  workboxConfig?: ?TGatsbyTypes_SitePluginPluginOptionsWorkboxConfigFilterInput,
  pathCheck?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  allExtensions?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  isTSX?: ?TGatsbyTypes_BooleanQueryOperatorInput,
  jsxPragma?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsIgnore = {|
  +patterns?: ?Array<?$ElementType<Scalars, 'String'>>,
  +options?: ?TGatsbyTypes_SitePluginPluginOptionsIgnoreOptions,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsIgnoreFilterInput = {|
  patterns?: ?TGatsbyTypes_StringQueryOperatorInput,
  options?: ?TGatsbyTypes_SitePluginPluginOptionsIgnoreOptionsFilterInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsIgnoreOptions = {|
  +nocase?: ?$ElementType<Scalars, 'Boolean'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsIgnoreOptionsFilterInput = {|
  nocase?: ?TGatsbyTypes_BooleanQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsLanguages = {|
  +name?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsLanguagesFilterInput = {|
  name?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsLanguagesFilterListInput = {|
  elemMatch?: ?TGatsbyTypes_SitePluginPluginOptionsLanguagesFilterInput,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsWorkboxConfig = {|
  +globPatterns?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

declare type TGatsbyTypes_SitePluginPluginOptionsWorkboxConfigFilterInput = {|
  globPatterns?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SitePluginSortInput = {|
  fields?: ?Array<?SitePluginFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

declare type TGatsbyTypes_SiteSiteMetadata = {|
  +title?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +author?: ?$ElementType<Scalars, 'String'>,
  +copyright?: ?$ElementType<Scalars, 'String'>,
  +siteUrl?: ?$ElementType<Scalars, 'String'>,
|};

declare type TGatsbyTypes_SiteSiteMetadataFilterInput = {|
  title?: ?TGatsbyTypes_StringQueryOperatorInput,
  description?: ?TGatsbyTypes_StringQueryOperatorInput,
  author?: ?TGatsbyTypes_StringQueryOperatorInput,
  copyright?: ?TGatsbyTypes_StringQueryOperatorInput,
  siteUrl?: ?TGatsbyTypes_StringQueryOperatorInput,
|};

declare type TGatsbyTypes_SiteSortInput = {|
  fields?: ?Array<?SiteFieldsEnum>,
  order?: ?Array<?TGatsbyTypes_SortOrderEnum>,
|};

export const TGatsbyTypes_SortOrderEnumValues = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC'
});


declare type TGatsbyTypes_SortOrderEnum = $Values<typeof TGatsbyTypes_SortOrderEnumValues>;

declare type TGatsbyTypes_StringQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'String'>,
  ne?: ?$ElementType<Scalars, 'String'>,
  in?: ?Array<?$ElementType<Scalars, 'String'>>,
  nin?: ?Array<?$ElementType<Scalars, 'String'>>,
  regex?: ?$ElementType<Scalars, 'String'>,
  glob?: ?$ElementType<Scalars, 'String'>,
|};

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<Keys, <Key>(k: Key) => $ElementType<Origin, Key>>;

declare type TGatsbyTypes_PagesQueryQueryVariables = {};


declare type TGatsbyTypes_PagesQueryQuery = {| +allSitePage: {| +nodes: $ReadOnlyArray<$Pick<TGatsbyTypes_SitePage, {| +path: * |}>> |} |};

declare type TGatsbyTypes_BlogHomeQueryENQueryVariables = {
  regex?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
};


declare type TGatsbyTypes_BlogHomeQueryENQuery = {| +allMdx: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: *, +excerpt: *, +mdxAST?: *, +id: * |}>,
        ...{| +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +image?: *, +date?: *, +description?: *, +authors?: * |}> |}
      }) |}> |}, +allSitePage: {| +nodes: $ReadOnlyArray<$Pick<TGatsbyTypes_SitePage, {| +path: * |}>> |} |};

declare type TGatsbyTypes_getMobileNavDataQueryVariables = {};


declare type TGatsbyTypes_getMobileNavDataQuery = {| +allMdx: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: * |}>,
        ...{| +headings?: ?$ReadOnlyArray<?$Pick<TGatsbyTypes_MdxHeadingMdx, {| +value?: * |}>>, +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +order?: * |}> |}
      }) |}> |} |};

declare type TGatsbyTypes_blogPostRecommendationsQueryVariables = {};


declare type TGatsbyTypes_blogPostRecommendationsQuery = {| +blogPosts: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: *, +excerpt: *, +id: * |}>,
        ...{| +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +date?: *, +description?: *, +authors?: *, +image?: * |}> |}
      }) |}> |}, +siteContent: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +excerpt: *, +fileAbsolutePath: * |}>,
        ...{| +headings?: ?$ReadOnlyArray<?$Pick<TGatsbyTypes_MdxHeadingMdx, {| +value?: * |}>>, +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +description?: *, +order?: * |}> |}
      }) |}> |} |};

declare type TGatsbyTypes_getMDXDataQueryVariables = {};


declare type TGatsbyTypes_getMDXDataQuery = {| +allMdx: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: * |}>,
        ...{| +headings?: ?$ReadOnlyArray<?$Pick<TGatsbyTypes_MdxHeadingMdx, {| +value?: * |}>>, +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +order?: * |}> |}
      }) |}> |} |};

declare type TGatsbyTypes_getDefaultLocaleQueryVariables = {};


declare type TGatsbyTypes_getDefaultLocaleQuery = {| +allDirectory: {| +nodes: $ReadOnlyArray<$Pick<TGatsbyTypes_Directory, {| +absolutePath: * |}>> |} |};

declare type TGatsbyTypes_getNavigationDataQueryVariables = {};


declare type TGatsbyTypes_getNavigationDataQuery = {| +headerFiles: {| +edges: $ReadOnlyArray<{| +node: ({
          ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: * |}>,
        ...{| +frontmatter?: ?$Pick<TGatsbyTypes_MdxFrontmatter, {| +title: *, +header?: *, +headerOrder?: * |}>, +headings?: ?$ReadOnlyArray<?$Pick<TGatsbyTypes_MdxHeadingMdx, {| +value?: * |}>> |}
      }) |}> |}, +socialLinks: {| +nodes: $ReadOnlyArray<({
        ...$Pick<TGatsbyTypes_Mdx, {| +fileAbsolutePath: * |}>,
      ...{| +internal: $Pick<TGatsbyTypes_Internal, {| +content?: * |}> |}
    })> |} |};

declare type TGatsbyTypes_Unnamed_1_QueryVariables = {};


declare type TGatsbyTypes_Unnamed_1_Query = {| +site?: ?{| +siteMetadata?: ?$Pick<TGatsbyTypes_SiteSiteMetadata, {| +title?: *, +description?: *, +author?: * |}> |} |};

declare type TGatsbyTypes_GatsbyImageSharpFixedFragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +base64?: *, +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFixed_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +tracedSVG?: *, +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFixed_withWebpFragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +base64?: *, +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFixed_withWebp_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +tracedSVG?: *, +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFixed_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFixed_withWebp_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpFixed, {| +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluidFragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +base64?: *, +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluidLimitPresentationSizeFragment = {| +maxHeight: $ElementType<TGatsbyTypes_ImageSharpFluid, 'presentationHeight'>, +maxWidth: $ElementType<TGatsbyTypes_ImageSharpFluid, 'presentationWidth'> |};

declare type TGatsbyTypes_GatsbyImageSharpFluid_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +tracedSVG?: *, +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluid_withWebpFragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +base64?: *, +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluid_withWebp_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +tracedSVG?: *, +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluid_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpFluid_withWebp_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpFluid, {| +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutionsFragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +base64?: *, +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutions_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +tracedSVG?: *, +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutions_withWebpFragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +base64?: *, +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +tracedSVG?: *, +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutions_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +width: *, +height: *, +src: *, +srcSet: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpResolutions_withWebp_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpResolutions, {| +width: *, +height: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizesFragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +base64?: *, +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizes_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +tracedSVG?: *, +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizes_withWebpFragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +base64?: *, +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizes_withWebp_tracedSVGFragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +tracedSVG?: *, +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizes_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +aspectRatio: *, +src: *, +srcSet: *, +sizes: * |}>;

declare type TGatsbyTypes_GatsbyImageSharpSizes_withWebp_noBase64Fragment = $Pick<TGatsbyTypes_ImageSharpSizes, {| +aspectRatio: *, +src: *, +srcSet: *, +srcWebp?: *, +srcSetWebp?: *, +sizes: * |}>;
