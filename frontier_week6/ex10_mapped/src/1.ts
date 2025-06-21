/* eslint-disable */
export {};

// mapped type
// optional로 바꾸거나 readonly로 바꾸는 역할을 수행
interface Person {
  name: string;
  age: number;
}
interface PersonOptional {
  name?: string;
  age?: number;
}
interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}
