import React, {useState} from "react";
// useState : state 값을 만들수 있는 리액트 훅
const Ex01 = () => {
    // 일반 변수는 값이 바뀌더라도 화면에 적용되지 않는다
    let num = 0;

    //() 안에 초기 값을 줄수있다
    // [State값(변수 이름), setState함수]
    // 비구조 할당
    const [number, setNumber] = useState(0);

    const [text, setText] = useState("");


    function plus(){
        // num++;
        //number++ --> 불가능 
        // state 값을 바꿀때는 setState 함수를 이용해줘야 한다
        setNumber(number+1)
    }

    function chText(e){
        // e : 이벤트 객체 이벤트에 대한 정보를 가져온다
        setText(e.target.value);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClic={plus}>plus</button>

            <h1>{text}</h1>
            <input onChange={chText}></input>
        </div>
    );
};