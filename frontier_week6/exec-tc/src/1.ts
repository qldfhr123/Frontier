// import { f1 } from "./2"

// // console.log(1 + 2);
// const a = { name : 1}
// const b = { name : 1}
// const c = { name : 1}


// f1
// // Auto Import : command + 1

/* eslint-disable */
export {};

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? "크다" : "작다";

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
// values.push("a");

const data: [string, number] = [msg, size];
data[0].substr(1);
// data[1].substr(1);

console.log("typeof 123 =>", typeof 123);
console.log('typeof "abc" =>', typeof "abc");
console.log("typeof [1, 2, 3] =>", typeof [1, 2, 3]);
