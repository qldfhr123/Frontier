/* eslint-disable */
export {};

interface Person {
  type: "a";
  name: string;
  age: number;
}
interface Product {
  type: "b";
  name: string;
  price: number;
}

function print(value: Person | Product) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
  }
}
