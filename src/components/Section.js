import React from 'react';
import Article from './Article';

function Section() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
	];

	return (
		<section>
			{arr.map((data, idx) => {
				//부모요소에서 자식 컴포넌트로 prop을 통해서 특정 데이터 전달 가능
				return <Article key={idx} data={data} />;
			})}
		</section>
	);
}

export default Section;
