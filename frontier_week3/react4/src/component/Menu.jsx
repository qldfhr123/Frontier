import React from "react";
// 컴포넌트 : 화면을 이루는구성 단위
// 1. 컴포넌트를 만들떄는 반드시 대문자 작정해야한다
// 2. 컴포턴트는 함수 또는 클래스 형식으로 만들수있다

const Menu = (propos) =>{
    // propos 상위컴포넌트에 보낸 데이터가 담겨있다
    return (
        <div>
            <h1>{propos.name}</h1>
            <p>{propos.price}원</p>
        </div>

    );

};
// props로 값이 넘오지 않을떄 기본값설정
Menu.defaultProps = {
    name:"준비중",
    price: "저렴하게 맛있게"
}


// 3. 다른곳에서 사용해야 하기 떄문에 export를 통해서 내보내야한다
export default Menu;