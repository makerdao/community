/** @jsx jsx */
import React from 'react';
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

import {BlogAuthor, BlogCard} from '@modules/blog';
import { SEO } from "@modules/utility";
import { console } from 'window-or-global';

///MDX Layout for POSTs
export default (props) => {
	const {children, pageContext} = props;
	const {
		title,
		description,
		keywords, //<- Seo
		authors, 
		date, 
		recommend, //<- Links to other blogs TODO(Rejon): I'm thinking of fetching blog posts based on their slugs using lunr
	} = pageContext.frontmatter;

	const {allMdx} = useStaticQuery(graphql`
		query allBlogPosts {
			#Regex for all blog posts
			allMdx(
				filter: {
					fileAbsolutePath: {
						regex: "//blogPosts/"
					}
				}
			)
			{
				edges {
						node {
							fileAbsolutePath
							excerpt(truncate: true, pruneLength: 200)
							frontmatter {
								title
								date(formatString: "MM/DD/YYYY")
								description
								authors
							}
							mdxAST
							id
						}
					}
				}
			}
	`)

	const otherPosts = recommend?.map((rec) => {
		return allMdx.edges.filter((({node}) => node.fileAbsolutePath.includes(rec)))[0]
	})
	
	
	const seo = {
		title, 
		description, 
		keywords
	};

	return (
		<div>
			<SEO {...seo} />
			<h1>{title}</h1>
			{authors && <BlogAuthor author={authors} date={date}/>}
			<div>
				{children}
			</div>
			{authors && (Array.isArray(authors) && authors.length > 1) &&
				<div>
					<h3> Contributors </h3>
					<p> This article is possible with a little help from friends.</p>
					<BlogAuthor author={authors} isContributors/>
				</div>
			}
			{(otherPosts && otherPosts.length > 0) &&
				<div>
					<h2 sx={{mb: '66px'}}> Read More </h2>
					<Flex sx={{
							justifyContent: 'start',
							width: '100%',
							mb: [0, '80px', '80px'],
							flexDirection: ['column', 'row', 'row'],
							'& > *:not(:last-child)': {
								mr: '96px'
							},
						}}>
							{otherPosts.map(({node}, index) => (
								<BlogCard {...node} key={`blog-recommendation-${index}`} />
							))}
					</Flex>
				</div>
			}
		</div>
	)

}