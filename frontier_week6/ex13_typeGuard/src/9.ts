/* eslint-disable */
export {};

interface Person {
  type: "person";
  name: string;
  age: number;
}
interface Product {
  type: "product";
  name: string;
  price: number;
}

// 타입의 종류거 너무 많아지면 유니온 타입의 식별자를 사용하자
function print(value: Person | Product) {
  if ("age" in value) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
