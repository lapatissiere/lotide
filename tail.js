const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

let array = [1, 2, 3, 4, 5];
function tail(array) {
  return array.slice(1);
}
console.log(tail(array));
