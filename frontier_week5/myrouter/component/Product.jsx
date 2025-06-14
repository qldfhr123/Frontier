import React from 'react'
import { useParams, useSearchParams} from 'react-router-dom' 
// 주소 값에 있는 데이터를 사용할수 있게끔 도와주는 리액트 훅

const Product = () => {
    // let {pronum} = useParams();
    let [query, setQuery] = useSearchParams();
  return (
    <div>
        <h1>제품 상세 내용 페이지 입니다!</h1>
        <p>{query.get('pronum')}번째 제품에 대한 내용</p>
    </div>
  )
}

export default Product