const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const result = [];
  for (i = 0; i < allItems.length; i++) {
    item = allItems[i];
    if (itemsToCount[item] === true) {
      if (result[item]) {
        result[item] = result[item] + 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
// loop through elements in array

// list elements in object
// eliminate false elements
// compare elements in array and object and find which elements are present in both (assertEqual?)
// count how many times each equal element appears

const namesToFind = { Jason: true, Karima: true, Fang: true, Agouhanna: false };
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, namesToFind);
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
