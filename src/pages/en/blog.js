/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import {graphql} from 'gatsby'
import {useLocation} from '@reach/router';
import queryString from 'query-string'

import {Button} from '@modules/ui';
import {Link} from '@modules/navigation';
import {BlogCard, BlogResult} from '@modules/blog'

const BlogHome = ({data}) => {
	const {search} = useLocation();
	const initialSection = queryString.parse(search).section || null;

	const [types, setTypes] = useState(data.allMdx.edges.map(({node}) => node.frontmatter.type).filter((value, index, self) => self.indexOf(value) === index))

	const [sectionData, setSectionData] = useState({
		type: initialSection, 
		allPosts: data.allMdx.edges,
		latestPosts: types.map((type) => data.allMdx.edges.find(({node}, index) => node.frontmatter.type === type))
	})

	const setBlogCategory = (cat = null) => {
		let allPosts = [...data.allMdx.edges]; //Spread it so we don't edit the original data. 
		let latestPosts = [];

		if (cat === null) //User clicked "Home"
		{
			latestPosts = types.map((type) => allPosts.find(({node}, index) => {
				const hasType = node.frontmatter.type === type; 

				if (hasType)
				{
					allPosts.splice(index, 1);
				}

				return hasType; 
			}));
		}
		else 
		{
			allPosts = data.allMdx.edges.filter(({node}) => node.frontmatter.type === cat); //allBlogPosts of a specific type
			latestPosts = allPosts.splice(0, 3);
		}

		setSectionData({
			type: cat, 
			allPosts,
			latestPosts
		});
	}

	console.log(sectionData.latestPosts)

	return (
		<Flex sx={{
			flexDirection: 'column',
			alignItems: 'center',
			mt: '128px',
			width: '100%'
		}}>
			
			<h1 sx={{
				mt: 0,
				fontWeight: 500,
				fontSize: '48px',
				mb: '50px'
			}}>Maker Community Blog</h1>
			
			<Flex sx={{
				mb: '98px',
				'& > *:not(:last-child)': {
					mr: '64px'
				}
			}}>
				<div sx={{
						color: sectionData.type === null ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						'&:hover': {
							color: 'linkAlt'
						}
					}}
					onClick={() => setBlogCategory(null)}
				>
					Home
				</div>
				{types.map((type, index) => (
					<div sx={{
						color: sectionData.type ===  type ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						'&:hover':  {
							color: 'linkAlt'
						}
					}}
					key={`blogPost-type-${index}`}
					onClick={() => setBlogCategory(type)}>
					{type}
					</div>
				))}
			</Flex>

			<Flex sx={{
				justifyContent: 'space-evenly',
				width: '100%'
			}}>
				{sectionData.latestPosts.map(({node}) => (
					<BlogCard isLatest {...node} />
				))}
			</Flex>

			<ul>
				<li>
					{/* <BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} /> */}
				</li>
			</ul>

			<div>
				<div>
					{/* <BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} /> */}
				</div>

				<div>
					Languages

					<ul>
						<li>
							<Link to="/blog/en">
								English
							</Link>
						</li>
						<li>
							<Link to="/blog/es">
								Español
							</Link>
						</li>
						<li>
							<Link to="/blog/it">
								Italiano
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<Button icon="plus">

					See more posts

				</Button>
			</div>
		</Flex>
	)
}

 export const query = graphql`
	query BlogHomeQuery($regex: String, $locale: String) {
		allMdx(filter: {fileAbsolutePath: {regex: $regex}}, sort: {fields: frontmatter___date, order: DESC}) {
			edges {
			node {
				fileAbsolutePath
				excerpt(truncate: true, pruneLength: 200)
				frontmatter {
				type
				title
				date(formatString: "MMMM DD, YYYY", locale: $locale)
				description
				authors
				}
				mdxAST
			}
			}
		}
	}
 `

export default BlogHome; 
