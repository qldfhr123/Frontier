/* eslint-disable */
export {};
// 자동으로 할당하지 않으면 0
enum Fruit {
  Apple,
  Banana=5,
  Orange
}
const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
