export {};

function getText(name: string, age: number, language : string | undefined): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  const languageText = language ? language.substr(0, 10) : '';
  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

// 에러는 나지 않지만 사용성과 가독성이 좋지않다
// 이름이 있는 named parameters 로 작성하는게 좋다
getText('mike', 23, 'ko');
// getText('mike', 23);
// getText('mike', 23, 123);
