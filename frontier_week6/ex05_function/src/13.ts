/* eslint-disable */
export {};

// 다른곳에서 사용하려면 인터페이스 사용
interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText({ name, age = 15, language }: Param): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
