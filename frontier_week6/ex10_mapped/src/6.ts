/* eslint-disable */
export {};

interface Person {
  name: string;
  age: number;
  language: string;
}
type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<"p1" | "p2", Person>;
