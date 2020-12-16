import React from 'react';
import {BlogAuthor} from '@modules/blog';
import { SEO } from "@modules/utility";

///MDX Layout for POSTs
export default ({children, pageContext}) => {

	const {
		title,
		description,
		keywords, //<- Seo
		authors, 
		date, 
		recommendations, //<- Links to other blogs TODO(Rejon): I'm thinking of fetching blog posts based on their slugs using lunr
	} = pageContext.frontmatter;
	
	const seo = {
		title, 
		description, 
		keywords
	};

	console.log(pageContext)

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
			{recommendations &&
				<div>
					<h3> Read More </h3>
					{/* TODO(Rejon): Figure out data for fetching recommendations */}
					<ul>
						<li>
							<BlogCard isLatest post={{type: 'governance'}} />
							<BlogCard isLatest post={{type: 'governance'}} />
							<BlogCard isLatest post={{type: 'governance'}} />
						</li>
					</ul>
				</div>
			}
		</div>
	)

}
