import logo from './logo.svg';
import './App.css';

function App() {
  // 클라이언트에게 보여진 내용이 들어간다
  let name = "qldfhr";
  let style = {backgroundColor:"black", color:"red"}
  /**
    *1. 하나의 부모 요소로 감싸기**: JSX는 반드시 하나의 부모 요소 안에 모든 요소가 포함되어야 한다 
    *2. JavaScript 표현식 사용**: 중괄호 {}를 사용하여 JSX 내부에서 JavaScript 표현식을 사용할 수 있다 ex) {}을 통해
    * 주의 --> 간단한 변수 출력 함스 사ㅣ영만 가능 if for 사용  불가능
    * 3. 예약어 사용 제한: class → className, for → htmlFor 등 HTML과 다른 JSX만의 예약어를 사용해야 한다
    * 4. 태그 닫기: 모든 태그는 반드시 닫혀야 합니다. self-closing 태그도 마지막에 /를 붙여야 한다!
   */
  return (
    //  하나의 부모 요소에 묶어야 한다
    <div>
       
      {/* 삼항 연산자 */}
      {name == "qldfhr" ? (
        <div>
          <h2>{name}의 즐거운 React 수업</h2>
        </div>
      ) 
      : 
      (<h1>즐거운 React2</h1>)}
      {/* 배경색 : black , 글자색 :red */}
      <h2 className="title2" style={style}> 즐거운 리액트시간</h2>
      <input></input>
        

    </div>
  

  );
}

export default App;
