/* eslint-disable */
export {};

// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안 된다.

function add(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

// 함수가 string number 반환을 하기 때문에
// 무조건 number 반환할지 확정할수 없음
const v1: number = add(1, 2);
console.log(add(1, "2"));
