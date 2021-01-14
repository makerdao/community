/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import {graphql} from 'gatsby'

import {Button} from '@modules/ui';
import {Link} from '@modules/navigation';
import {BlogCard, BlogResult} from '@modules/blog'

const BlogHome = ({data}) => {
	let allBlogPosts = data.allMdx.edges;
	const [currentType, setCurrentType] = useState(null);
	const [types, setTypes] = useState([...new Set(data.allMdx.edges.map(({node}) => node.frontmatter.type))])

	let firstOfType = [];

	//Filter allBlogPosts by type
	if (currentType !== null)
	{
		allBlogPosts = data.allMdx.edges.filter(({node}) => node.frontmatter.type === currentType); //allBlogPosts of a specific type
		firstOfType = allBlogPosts.splice(0, 3); //Get the first 3 blog posts, remove them from the allBlogPosts array
	}
	else { //Get the latest article of each type.
		allBlogPosts = data.allMdx.edges; 
		firstOfType = types.map((type) => allBlogPosts.find(({node}, index) => node.frontmatter.type === type));
	}

	console.log(allBlogPosts,firstOfType,currentType)

	return (
		<Flex sx={{
			flexDirection: 'column',
			alignItems: 'center',
			mt: '128px'
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
						color: currentType === null ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						'&:hover': {
							color: 'linkAlt'
						}
					}}
					onClick={() => setCurrentType(null)}
				>
					Home
				</div>
				{types.map((type, index) => (
					<div sx={{
						color: currentType ===  type ? 'link' : 'mutedAlt',
						cursor: 'pointer',
						transition: 'all .16s',
						'&:hover':  {
							color: 'linkAlt'
						}
					}}
					key={`blogPost-type-${index}`}
					onClick={() => setCurrentType(type)}>
					{type}
					</div>
				))}
			</Flex>
			<ul>
				<li>
					<BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} />
					<BlogCard isLatest post={{type: 'governance'}} />
				</li>
			</ul>

			<div>
				<div>
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
					<BlogResult post={{type: 'governance'}} />
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
