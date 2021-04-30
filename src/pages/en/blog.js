// @flow

import { Blog } from '@templates';
import type { Node } from 'react';
import React from 'react';
import { graphql } from 'gatsby';

type TBlogPageProps = {
  data: TGatsbyTypes_BlogHomeQueryENQuery,
};

export default function BlogPage({ data }: TBlogPageProps): Node {
  return <Blog data={data} />;
}

//NOTE(Rejon): Change the name of this query when adding new locales!!!
//		       ie. BlogHomeQueryEN -> BlogHomeQueryES
export const query: string = graphql`
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
