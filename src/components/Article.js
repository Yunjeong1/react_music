import React from 'react';

const path = process.env.PUBLIC_URL;

function Article({ data }) {
	//console.log(props);
	return (
		<article>
			<h2>{data}</h2>
			<img src={`${path}/img/${data}.jpg`} />
		</article>
	);
}

export default Article;
