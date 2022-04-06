import React from 'react';

function Article(props) {
	console.log(props);
	return (
		<article>
			<h1>{props.data}</h1>
			<p>{props.index}</p>
		</article>
	);
}

export default Article;
