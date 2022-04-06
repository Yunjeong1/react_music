import React from 'react';

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
				return <article key={idx}>{data}</article>;
			})}
		</section>
	);
}

export default Section;
