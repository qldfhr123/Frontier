export {};

class Person {
  readonly name: string;
  private readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('홍길동', 23);
person.name = '김삿갓';
