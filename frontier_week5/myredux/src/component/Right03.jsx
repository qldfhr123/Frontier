import React from 'react'
import { useSelector } from 'react-redux'
// : Store에서 값을 꺼내오는 역할

const Right01 = () => {
  
  // useSelector : 어떤값을꺼내올지 콜백 함수가 필요
  // state --> store에서 공유 하고 있는 값을
  const data = useSelector((state) => state.text);

  return (
    <div>
      <span>{data}</span>
    </div>
  )
}

export default Right01