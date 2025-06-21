/* eslint-disable */
export {};

type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
interface Person {
  name: string;
  age: number;
  nation: string;
}
type T1 = StringPropertyNames<Person>;

// interface Person2 {
//   name: 'name';
//   age: never;
//   nation: 'nation';
// }
// naver 은 유니온에서 제거
type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>;
