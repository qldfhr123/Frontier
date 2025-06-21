"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruit = 0 /* Fruit.Apple */;
const lang = "ko" /* Language.Korean */;
function getIsValidEnumValue(enumObject, value) {
    if (typeof value === "number") {
        return !!enumObject[value];
    }
    else {
        return Object.keys(enumObject)
            .filter((key) => isNaN(Number(key)))
            .some((key) => enumObject[key] === value);
    }
}
getIsValidEnumValue(Fruit, 1);
