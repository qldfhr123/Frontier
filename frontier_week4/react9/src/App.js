import logo from './logo.svg';
import './App.css';
import Subltem1 from './component/Subltem1';
import { createContext, useState } from 'react';
// 1. 공유 저장소 만들기
export const AppText = createContext();

function App() {
  // 2. 공유할 값 생성
  const [text, setText] = useState(); 
  return (
    <div className="App">
      <div>
        {/* 공유 저장소에 공유값 반영후 하위 컴포넌트 에서 사용 할수 있도록 허용 */}
        <AppText.Provider value={setText}>
          <h1>Context API 사용하기</h1>
          <h1>{text}</h1>
          <Subltem1></Subltem1>
        </AppText.Provider> 
      </div>
      
    </div>
  );
}

export default App;
