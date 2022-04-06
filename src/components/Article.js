import React from 'react';

const path = process.env.PUBLIC_URL;

function Article({ data }) {
	return (
		<article>
			<h2>{data}</h2>
			<img src={`${path}/img/${data}.jpg`} alt={data + ' cover image'} />
		</article>
	);
}

export default Article;
