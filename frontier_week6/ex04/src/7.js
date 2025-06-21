"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter((key) => isNaN(Number(key)))
        .some((key) => enumObject[key] === value);
}
