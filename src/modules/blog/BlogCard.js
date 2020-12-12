import React from 'react';
import {BlogAuthor} from '@modules/blog'

const BlogCard = ({post, isLatest}) => (
	<div>
		<p>{isLatest && 'Latest in'} {post.type}</p>
		<img/>

		<h3> How to Participate </h3>

		<BlogAuthor author="shea-fitz" date="11/30/2020"/>

		<p>
			Determine governance and DAO processes outside
			the technical layer of the Maker Protocol.
		</p>
	</div>
)

export default BlogCard;
