import React, { useState, useRef } from "react";
// useRef 태그를 지칭힐수 있는 기능!
const ExRef = () => {

    const [text, setText] = useState("");

    function chText() {
        setText();
    }

    return(
        <div>
            <h1>신나는 리액트</h1>
            <input ref={input}onChange={chText}></input>
            <p>{text}</p>


        </div>
        

    );
};

export default ExRef;