/** @jsx jsx */
import React from 'react';
import {jsx} from 'theme-ui'
import {Link} from '@modules/navigation';


import {BlogAuthor} from '@modules/blog'
import {UrlConverter} from '@utils'
import { useTranslation } from "@modules/localization";

const BlogCard = ({excerpt, fileAbsolutePath, frontmatter, mdxAST, isLatest}) => {
	const { t } = useTranslation();

	const {authors, date, description, title, type} = frontmatter;
	let postImage = null; 
	const postLink = fileAbsolutePath 
    .slice(fileAbsolutePath.indexOf("/blogPosts/") + 10, fileAbsolutePath.length)
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "")
	
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
				{isLatest && t('Latest_In')} 
				{type && 
					<Link 
						to={`/blog?section=${type}`} 
						sx={{
							fontWeight: 400
						}}
					>
						{t(type)}
					</Link>
				}
			</p>
			{postImage && <Link to={postLink} hideExternalIcon sx={{display: 'block'}}><img src={postImage} sx={{ width: '288px', height: '188px', objectFit: 'cover', mb: 2,}}/></Link>}

			<Link sx={{mb: '26px', fontWeight: 500, fontSize: 6, color: 'text', display: 'block'}} to={postLink} hideExternalIcon> {title} </Link>

			<BlogAuthor author={authors} date={date}/>

			<p>
				{description || excerpt}
			</p>
		</div>
	)
}

export default BlogCard;
