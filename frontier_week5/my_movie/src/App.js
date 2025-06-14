import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios  from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [inputText, setInputText]= useState([]);

useEffect(function() {
  if(inputText == '' || inputText.length == 8) {
    let targetDate = "20200101";
    if(inputText.length == 8){
      targetDate = setInputText;
    }
    axios({
      url : "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt="+targetDate,        
      method: "GET",
    }).then((res) => {
      // 영화 정보 배열 생성
      setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);  

    });
  }
}, [inputText]);

  return (
    <div className="App">
      <table>
        <tr>
          <td>영화 순위</td>
          <td>영화명</td>
          <td>개봉일</td>
        </tr>
        {movieList.map((item) => 
          <tr>
            <td>{item.rank}</td>
            <td>{item.movieNum}</td>
            <td>{item.openDt}</td>
          </tr>
        )}
      </table>
      <input onChange={(e) => {setInputText(e.target.value)}}></input>
    </div>
  );
}

export default App;
