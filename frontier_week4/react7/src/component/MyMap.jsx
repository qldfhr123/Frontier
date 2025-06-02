import React from "react";

const myMap = () => {
    let array = [1,2,3,4,5];
    // array 에 있던 데이터를 가져와서 2를 곱한 새로운 배열을 만든다
    // data => array 에 있던 데이터를 순차적으로 가져온다
    //[2,4,6,8,10]
    return(
        <div>
            <div>{array.map((data)=>data*2)}</div>
            <div>{array.map((data)=><h1>{data}</h1>)}</div>
            <h1>FILTER</h1>
            {/* array에 있는 데이터들 중 짝수만 반환해서 새오운 배여을 만들어준다 */}
            <div>{array.filter((data) => data%2 === 0).map((data) => (<h1>{data}</h1>))}</div>
        </div>
    );
};


export default myMap;