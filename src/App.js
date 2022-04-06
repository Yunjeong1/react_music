import './scss/style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

//fragment: 복수개의 컴포넌트를 wrapping tag로 감싸지 않고 그룹화 시켜서 내보낼때
//JSX는 한번에 하나의 컴포넌트만 return가능
//복수개의 요소로 return하고 싶을때는 fragment로 감싸줌
//JSX안쪾에는 일반 주석을 쓸수 없고 주석을 {}로 감싸서 적용
//JSX안쪽에서 연산이 필요한 구문은 무조건 {}감싸서 표현

function App() {
	return (
		<>
			{/* header */}
			<Header />
			<Section />
			<Footer />
		</>
	);
}

export default App;
