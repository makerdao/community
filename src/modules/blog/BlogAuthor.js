/** @jsx jsx */
import React from "react";
import {jsx, Flex} from 'theme-ui'
import {format} from 'date-fns';

import allContributors from '@content/all-contributors.json'

//Get's the author data object from all-contributors json 
//OR just returns an object with the name of the author.
const getAuthorData = (_author) => {
	return allContributors.contributors.find((n) => n.login && n.login === _author.replace(/@/g, "")) //<- Incase someone puts an @ symbol in their entry 
			|| {name: _author}
}

const BlogAuthor = ({
	isContributors = false,
	date = null,
	author
}) => {
  const renderAuthorData = (contributors) => 
  	contributors.map((con) => 
		isContributors ? 
			<BlogAuthor date={date} {...con}/>
			:
			<BlogContributor {...con}/>
	)

	//If we're rendering this author component as a grid of authors, use the other design.
	if (isContributors)
	{
		const authors = Array.isArray(author) ? author : [author];

		const authorsToRender = authors.map((a) => {
			const _author = getAuthorData(a);

			return (
				<div>
					{
						_author.avatar_url &&
						<img src={_author.avatar_url}/>
					}

					{_author.name}
				</div>
			)
		})

		return (
			<div>
				{authorsToRender}
			</div>
		);
	}
	//NOTE(Rejon): We don't have a case of rendering multiple authors in a list like format.
	//			   So we only support one author for this case, unless otherwise specified.
	const soleAuthor = Array.isArray(author) ? author[0] : author;

	const authorToRender = getAuthorData(soleAuthor)

	//Single Author Element 
	//NOTE(Rejon): Would typically go at the top of an article, 
	//			   or below an article title inside of an article card.
	return (
		<Flex>
			{
				authorToRender.avatar_url &&
					<img src={authorToRender.avatar_url} sx={{
						borderRadius: '100%',
						width: '64px',
						height: '64px',
						display: 'inline-block'
					}}/>
			}
			
			<div sx={{display: 'inline-block', ml: '10px'}}>
				<p sx={{fontWeight: 400, mb: '3px', mt: 0}}>{authorToRender.name}</p>
				{date &&<p sx={{color: 'mutedAlt', fontWeight: 400, m: 0}}> { format(new Date(date), 'MMMM d, yyyy')}</p>}
			</div>
		</Flex>
	)
}

export default BlogAuthor
