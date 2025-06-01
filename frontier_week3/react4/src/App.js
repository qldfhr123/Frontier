import logo from './logo.svg';
import './App.css';

// 4. 컴포넌트를 사용하는곳에서 불러와서 사용하기 (import)
import Menu from './component/Menu';
import Team_mate from './component/Team_mate';

function App() {
  //props : 싱위 컴포넌트에서 하위 컴포넌트로 데이터 전달시 사용된다
  // 속성

  return (
      <div className="App">
        <Menu name = "아메리카노" price={3500}></Menu>
        <Menu name = "카페라떼" price={4000}></Menu>

        <Team_mate dep = "교육 운영부" name="선영표"></Team_mate>
        <Team_mate dep = "전략기획실" name="강예진"></Team_mate>
        <Team_mate dep = "홍보팀" name="임보미"></Team_mate>
        <Team_mate dep = "기획팀" name="최영화"></Team_mate>
        
      </div>
  );



}

export default App;
