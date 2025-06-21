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
function print(value: Person | Product) {
  // 실행후 값에 있는 영역
  if (value instanceof Person) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
