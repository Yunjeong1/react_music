import React from 'react';
import Article from './Article';

/* 
  전개연산자 (Spread Operator)
  -참조형 자료를 완전복사 (deep copy)

  변수에 배열이나 객체같은 참조형 자료를 할당하면 
  해당 변수에는 실제 값이 할당되는 것이 아닌 해당값이 위치해있는 주소값이 참조
*/

//원시형 자료는 실제 해당 값이 변수에 할당되므로 같다고 출력
const a = 'apple';
const b = 'apple';
console.log(a === b);

//해당 배열의 값이 변수에 할당되는게 아닌 서로 다른 참조 주소가 할당되므로
//아래 두값을 비교하면 다르다는 결과값이 출력
const arr1 = ['red', 'green', 'blue'];
const arr2 = ['red', 'green', 'blue'];
console.log(arr1 === arr2);

/*
//배열을 생성하고
let fruit = ['apple', 'mango', 'melon'];
//해당 배열을 새로운 배열로 옮겨담음 (복사)
let newFruit = fruit;
//복사된 배열의 첫번째 값을 변경
newFruit[0] = 'orange';
//복사된 배열값 출력 (변경된 값으로 출력)
console.log(newFruit);
//변경하지 않은 원래 배열값도 같이 변경된 것을 확인
console.log(fruit);

//불변성 (immutable)
//참조형 자료를 복사할때는 원본 데이터와 비교할 수록 있도록 무조건 deep copy
*/

let fruit = ['apple', 'mango', 'melon'];
let newFruit = [...fruit];
newFruit[0] = 'orange';
console.log(newFruit);
console.log(fruit);

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
				return <Article key={idx} data={data} index={idx} />;
			})}
		</section>
	);
}

export default Section;
