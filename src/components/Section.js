import React, { useState } from 'react';
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
		'Vespers',
	];

	const [item, setItem] = useState(arr);

	return (
		<section>
			<button
				onClick={() => {
					let newItem = [...item];
					newItem[0] = 'Calm';
					setItem(newItem);
				}}>
				이미지 변경
			</button>
			{item.map((data, index) => {
				return <Article key={index} data={data} index={index} />;
			})}
		</section>
	);
}

export default Section;
