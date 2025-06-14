import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    // 특정 상황에 사용
    const nav = useNavigate();

    function chPage() {
        // nav 원하는 이동 주소 Route 에 작성 한 path를 사용해야한다
        nav("/about");
    }


  return (
    <div>
        <h1>Home</h1>
        {/* 
            a 태ㅔ그 Link 컴포넌트를 통해서 주소 값을 바꿀수 있다
            a 태그 ->> index.html  을 새로 고침한다
            Link ->>  새로고침 하지 않으며 안에 있는 컴포넌트만 바꿔 준다!
        */}
        <a href='/abot'> About 컴포넌트 띄우기</a>
        <br></br>
        <Link to = '/abot'>About2 띄우기</Link>
        <br></br>
        <button onClick={chPage}></button>

        {/* 1, 2, 3 번쨰 상품으로 상세보기 페이지로 갈수 있는 Link */}
        <Link to = '/product/?pronum=1'>1번째 상품</Link>
        <Link to = '/product/?pronum=2'>2번째 상품</Link>
        <Link to = '/product/?pronum=3'>3번째 상품</Link>
    </div>
  )
}

export default Home