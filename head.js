const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

let array = [1, 2, 3, 4, 5];
function head(array) {
  return array[0];
}
console.log(head(array));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");