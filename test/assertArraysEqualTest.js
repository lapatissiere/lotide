const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

console.log(assertArraysEqual([1, 3, 3], [1, 2, 3]));
