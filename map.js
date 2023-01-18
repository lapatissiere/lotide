const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  //console.log('item BEFORE: ', item);
  //console.log('item AFTER: ', callback(item));
  //console.log('---');

  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

const assertArraysEqual = function (actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArray = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
