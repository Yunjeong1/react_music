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
	];

	//상태 관리할 초기값을 useState함수에 인수로 전달하면
	//배열을 리턴 [state, state를 변경하는 함수]
	const [item, setItem] = useState(arr);

	return (
		<section>
			<button
				onClick={() => {
					//불변성을 유지하기 위해 기존 데이터를 deep copy한 다음 데이터 수정
					let newItem = [...item];
					newItem[0] = 'Calm';
					//수정된 데이터는 무조건 state변경함수로만 변경가능
					//해당 함수로만 변경해야지 변경된 부분이 재 랜더링 발생
					setItem(newItem);
				}}>
				이미지 변경
			</button>
			{/* item이라는 state에 옮겨담은 값으로 컴포넌트 반복 출력 */}
			{item.map((data, idx) => {
				return <Article key={idx} data={data} index={idx} />;
			})}
		</section>
	);
}

export default Section;
