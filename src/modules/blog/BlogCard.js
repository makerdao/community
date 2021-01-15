/** @jsx jsx */
import React from 'react';
import {jsx} from 'theme-ui'
import {Link} from '@modules/navigation';
import { navigate } from '@reach/router';


import {BlogAuthor} from '@modules/blog'
import {UrlConverter} from '@utils'

const BlogCard = ({excerpt, fileAbsolutePath, frontmatter, mdxAST, isLatest}) => {
	const {authors, date, description, title, type} = frontmatter;
	let postImage = null; 
	
	//Grab the first image from the mdx file and use it for the featured image. 
	if (mdxAST && mdxAST.children.length > 0)
	{
		if (mdxAST.children[0].type === 'paragraph' && mdxAST.children[0].children[0].type === 'image')
		{
			postImage = mdxAST.children[0].children[0].url;
		}
		else if (mdxAST.children[0].type === 'image')
		{
			postImage = mdxAST.children[0].url;
		}
	}

	return (
		<div sx={{
			width:'286px'
		}}>
			<p sx={{
				fontWeight: 400,
				color: 'mutedAlt',
				textTransform: 'uppercase',
				mt: 0,
				mb: 3
			}}>
				{isLatest && 'Latest in '} 
				<Link to={`/blog?section=${type}`} sx={{
					fontWeight: 400
				}}>{type}</Link>
			</p>
			{postImage && <img src={postImage} sx={{ width: '288px', height: '188px', objectFit: 'cover', mb: 2}}/>}

			<h3 sx={{m: 0, fontWeight: 500, fontSize: 6, mb: '26px'}}> {title} </h3>

			<BlogAuthor author={authors} date={date}/>

			<p>
				{description || excerpt}
			</p>
		</div>
	)
}

export default BlogCard;
