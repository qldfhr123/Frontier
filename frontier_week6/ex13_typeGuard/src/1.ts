/* eslint-disable */
export {};

// as 버그 위험이 강해진다 사용은 자제
function print(value: number | string) {
  if (typeof value === "number") {
    console.log((value as number).toFixed(2));
  } else {
    console.log((value as string).trim());
  }
}
