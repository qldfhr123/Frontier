import React from "react";
import { useState } from "react";

const MyToDoList = () => {
    const [myList, setMyList] = useState([]);
    const [inputText, setInputText] = useState("");

    function addPlan(){
        // 1. input 태그에 작언 값을 가져오기!!
        setMyList(myList.concat(inputText));
        /** 불변성이 깨질수 있다 push금지 */
        // setMyList(myList.push(inputText);)
    }

    function deletePlan(deleteText){
        // 2. 삭제하기
        setMyList(myList.filter((data, index) => index !== deleteText));
    }

    return(
        <div>
            <h1> 2025 올해는 꼭 해보자</h1>
            <input onChange={(e) => setInputText(e.target.value)}></input>
            <button onClick={addPlan}>추가하기</button>

            <h1>ToDo List</h1>
            <ol>
                {/* 배열의 인덱스를 사용한다 */}
                {myList.map((data, index) => (
                <li>
                    {data}
                    <button onClick={() => deletePlan(index)}>삭제하기</button>
                </li>
                ))}
            </ol>
        </div>
    );
};

export default MyToDoList