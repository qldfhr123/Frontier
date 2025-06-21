/* eslint-disable */
export {};

interface Person {
  name: string;
  age: number;
}
interface Product {
  name: string;
  price: number;
}
type PP = Person & Product; // 교차 타입 서로 다른인터페이스를 합칠수 있다 교집합 같다
const pp: PP = {
  name: "a",
  age: 23,
  price: 1000
};
