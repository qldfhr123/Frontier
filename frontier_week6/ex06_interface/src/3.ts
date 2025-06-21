/* eslint-disable */
export {};

interface Person {
  readonly name: string;
  age?: number;
}
const p1: Person = {
  name: "mike"
};
p1.name = "jone";
