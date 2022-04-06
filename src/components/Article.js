import React from 'react';

//public폴더까지의 절대 경로값
const path = process.env.PUBLIC_URL;

function Article(props) {
	console.log(props);
	return (
		<article>
			<h2>{props.data}</h2>
			{/* public폴더까지의 절대경로를 불러와서 그 뒤에 props로 전달받은 이미지명을 이용해 이미지소스 url완성 */}
			<img src={`${path}/img/${props.data}.jpg`} />
		</article>
	);
}

export default Article;
