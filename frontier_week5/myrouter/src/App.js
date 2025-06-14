import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { Route, Routes, Link } from 'react-router-dom';
import Product from '../component/Product';


function App() {
  return (
    <div className="App">
      {/* Home 컴포논트 About 컴포넌트 각각 주소값을 지정해서 해당하는 주소값으로 접근했을때 출력 */}
      
      {/* 
          Routes : 주소값을 관리 하는 컴포넌트
          Route : 실제로 컴포넌트에 주소를 부여해주는 컴포넌트
          __> path : 주소 값 지정
          --> element :  주소값에 따른 띄워질 컴포나ㅓㄴ트 지정
          페이지가 새로고침이 된다
      */}
      <h1> Route 활용 상단 메뉴</h1>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='product/:pronum' element = {<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
