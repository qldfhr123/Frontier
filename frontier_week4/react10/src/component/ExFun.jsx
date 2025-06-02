import React, {useState, useEffect} from 'react'
// userEffect >> 함수형 컴포넌트에서 생명주기 함수를 사용할 수있도록 만들어준 React Hook
// componentDidMounut + componentDidMounut

function ExFun() {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    function plus () {
        setNum(num+1);
        //num 10 도달시 alert창 통해 목표 숫자 
    }

    function plus2 () {
        setNum2(num2+2);
        //num 10 도달시 alert창 통해 목표 숫자 
    }

    useEffect(() => {
        console.log("useEffect 실행!!!!")
        if(num == 10){
            alert("목표 숫자 도달!!")
        };
    }, [num]); // dependency Array

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={plus}>Plus</button>


        <h1>{num2}</h1>
        <button onClick={plus2}>Plus</button>
    </div>
    
  )
}

export default ExFun