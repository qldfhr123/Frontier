"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 자동으로 할당하지 않으면 0
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
const v1 = Fruit.Apple;
const v2 = Fruit.Banana;
