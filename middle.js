let eqArray = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// if array.length%2 = 0, array has even number of elements
// else, array has odd number of elements
// median for odd number of elements = number at median index
// median for even number of elements = two numbers in the middle

// if array.length <= 2, return empty array
let array = [1, 2, 3, 4, 5];
const middleIndex = Math.floor(array.length / 2);
const middleLeft = array[middleIndex - 1];
const middleRight = array[middleIndex];

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [middleLeft, middleRight];
  }
};
console.log(middle([1, 2, 3, 4, 5]));
module.exports = middle;
