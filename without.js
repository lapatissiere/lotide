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

let without = function (source, itemsToRemove) {
  const output = [];
  for (let sourceItem of source) {
    if (!itemsToRemove.includes(sourceItem)) {
      output.push(sourceItem);
    }
  }
  return output;
};

const actual = without([1, 2, 3], [1, 2]);

const expected = [3];

const expected2 = [4];

assertArraysEqual(actual, expected);

assertArraysEqual(actual, expected2);

// list and equate the elements of the two arrays above

//return newArray (not modified) with elements that are not common to both arrays

/*const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/
