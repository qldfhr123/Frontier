/* eslint-disable */
export {};

interface Person {
  name: string;
  age?: number | undefined; // 선택 속성 | >> 항상 입력해야하고 undefined을 입력가능
}
const p1: Person = { name: "mike" };
