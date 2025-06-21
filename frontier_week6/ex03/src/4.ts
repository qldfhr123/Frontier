/* eslint-disable */
export {};

function f1(): void {
  console.log("hello");
}
// 무한 루프 반환 타입
function f2(): never {
  throw new Error("some error");
}
function f3(): never {
  while (true) {
    // ...
  }
}
