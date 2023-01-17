const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 6, 5];

let eqArray = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
console.log(eqArray(array1, array2));

assertArraysEqual = function (eqArray) {
  console.log(assertArraysEqual(array1, array2));
};
