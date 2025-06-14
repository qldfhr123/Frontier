import {createStore} from "redeux";
// : 공유저장소 만드는 기능


// 1. 공유 저장소 생성
const store = createStore();

// 3. store 에 접근 할수 있는 reducer를 생성
// currentState Store에서 꺼내온 값
// action : dispatch 로 보낸 요청이 담겨있다
/** 초기값을 만드는 이유 >> store가 한번도 사용되지 않았으니까 여기서 초기값을 만들고 리턴 store을 값을 보관만 하고 있다 reducer이 생성 관리를 모두 하기 때문에*/
function reducer (currentState, action){
    const newState = {...currentState};

    // 4. 초기 State값 만들기! 중요
    if(currentState === undefined){
        return {
            text: "초기값",
        };
    }
    if(action.type == "텍스트를 바꿔줘"){
        newState.text = action.text;
    }
    return newState;

}
export default store;
 