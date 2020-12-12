import React from 'react';

import {BlogAuthor} from '@modules/blog';

const BlogResult = ({post}) => (
	<div>
		{post.type && <p>{post.type}</p>}
		<h4>What is SourceCred and how do I opt in?</h4>
		<BlogAuthor author="MaximumCrash" data="11/30/2020"/>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis aliquet odio, vel ullamcorper magna condimentum consectetur. Donec tempus sapien ut magna iaculis, malesuada hendrerit ipsum ullamcorper. Sed tincidunt odio ligula, quis dictum libero consequat eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque gravida erat eu dignissim tincidunt. Proin molestie suscipit sagittis. Aliquam eget lorem in justo molestie pharetra vel sit amet ante. Etiam ac elit tincidunt, feugiat est vel, vulputate purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac libero sed justo vulputate maximus. In eu arcu non massa sollicitudin accumsan in vitae mauris. Praesent et enim viverra, posuere dolor in, maximus odio. Nulla purus velit, lacinia sit amet magna eu, mollis luctus turpis.
		</p>
	</div>
)

export default BlogResult;
