/* eslint-disable */
export {};

interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number; // 인덱스 타입 ; 값의 타입만 정의
}
const p1: Person = {
  name: "mike",
  birthday: "1997-01-01",
  age: "25"
};
