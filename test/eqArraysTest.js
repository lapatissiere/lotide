const assertEqual = require("../assertEqual");
const eqArray = require("../eqArrays");

console.log(eqArray([1, 2, 3], [3, 2, 1]));
console.log(eqArray(["1", "2", "3"], ["1", "2", "3"]));

// compare number of elements in both arrays
