/* eslint-disable */
export {};
// named 리팩토링 가능하다
function getText(name: string, age = 15, language?: string): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
