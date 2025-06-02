import React, { useContext, useRef } from 'react'
// 공유 저장소 불러오기
import {AppText} from "../App"


const Subltem3 = () => {

    const setText = useContext(AppText);
    const inputRef = useRef();

  return (
    <div>
        <input ref = {inputRef} 
        onChange={() => setText(inputRef.current.value)}></input>

    </div>
    
  )
}

export default Subltem3