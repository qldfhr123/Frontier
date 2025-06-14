import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
// : reducer 로 요청을 보내는 기능
// -> 요청 메세지가 (action)반드시 필요함

const Left03 = () => {

    const [inputText, setInputText] =useState("");
    const dispatch = useDispatch();

  return (
    <div>
        <input onChange={(e) => setInputText(e.target.value)}></input>
        <button onClick={() => {
            dispatch({
                type : "텍스트를 바꿔줘",
                text : inputText,
            });
        }
        }>글씨 바꾸기</button>
    </div>
  )
}

export default Left03