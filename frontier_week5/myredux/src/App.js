import logo from './logo.svg';
import './App.css';
import Left01 from './component/Left01';
import Right01 from './component/Right01';
import {Provider} from "react-redux";
// 공유 저장소를 사용할수 있게씀 허용
import store from './store';

function App() {
  return (
    <div className="App">
      {/* 2. 공유저장소 허용 */}
      <Provider store={store}>
        <Left01></Left01>
        <Right01></Right01>
      </Provider>
      
    </div>
  );
}

export default App;
