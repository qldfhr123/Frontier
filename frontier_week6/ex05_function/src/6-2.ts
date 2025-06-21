/* eslint-disable */
export {};
// this 타입을 정의하지 않아서 오류가 난다
function getParam(index: number): string {
  const params = this.splt(",");
  if (index < 0 || params.length <= index) {
    return "";
  }
  return this.split(",")[index];
}
