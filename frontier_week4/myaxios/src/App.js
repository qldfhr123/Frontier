import logo from './logo.svg';
import './App.css';
// axios가져요기
import axios from "axios";

function App() {

  async function getMovies(){
      // 비동기 통신으로 영화 데이터 가져오기
      // axios({
      //   // 1.어디랑 통신 할껀지
      //   url : "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101",
      //   // 2. 어떤 방식으로 통신할껀지
      //   method: "GET",
      //   // 3. 통신 성공시 실행할 콜백 함수
      // }).then((result) => {
      //   console.log("통신 성공!")
      // });

      // 축약 버전 => 안전 장치가 걸린다 (통신이 꼬일 우려가있으므로), async ~await >> 안전장치 해제
      const data = await axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101");
      console.log(data);
    }

  return (
    <div className="App">
      <h1>영화 순위 데이터 가져오기</h1>
      <button onClick={getMovies}>Get!!!!</button>
    </div>
  );
}

export default App;
