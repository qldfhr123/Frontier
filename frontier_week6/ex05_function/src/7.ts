/* eslint-disable */
function getParam(this: string, index: number): string {
    const params = this.split(",");
    if (index < 0 || params.length <= index) {
      return "";
    }
    return this.split(",")[index];
  }
  // getParam 정의하지 않아 오류 발생
  String.prototype.getParam = getParam;
  console.log("asdf, 1234, ok ".getParam(1));
  