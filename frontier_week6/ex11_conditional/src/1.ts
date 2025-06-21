/* eslint-disable */
export {};

// T extends U ? X : Y

// 입력된 제네릭에 따라 타입을 결정 할수있는기능

type IsStringType<T> = T extends string ? "yes" : "no"; // 타입에 대한 부분이다 
type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
