/** @jsx jsx */
import React from 'react';
import {jsx} from 'theme-ui'

import {Link} from '@modules/navigation';
import {BlogAuthor} from '@modules/blog';
import { useTranslation } from "@modules/localization";

const BlogResult = ({frontmatter,  excerpt, fileAbsolutePath}) => {
	const {t} = useTranslation();
	const {authors, date, description, title, type} = frontmatter;
	const postLink = fileAbsolutePath 
    .slice(fileAbsolutePath.indexOf("/blogPosts/") + 10, fileAbsolutePath.length)
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "")

	return (
		<div sx={{
			px: [0,0,'32px'],
			pt: '34px',
			pb: '50px',
			borderBottom: '1px solid',
			borderColor: 'muted'
		}}>
			{type && 
				<Link 
					to={`/blog?section=${type}`} 
					sx={{
						fontWeight: 400,
						textTransform: 'uppercase',
						mb: 3
					}}>
					{t(type)}
				</Link>
			}
			<Link to={postLink} sx={{color: 'text'}}>
			<h2 sx={{
				fontWeight: 500,
				fontSize: '32px',
				mb: '28px',
				
			}}>{title}</h2>
			</Link>
			<BlogAuthor author={authors} date={date} />
			<p sx={{mt: '26px'}}>
				{description || excerpt}
			</p>
		</div>
	)
}

export default BlogResult;
