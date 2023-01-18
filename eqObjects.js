const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let k in object1) {
      if (object1[k] instanceof Object) {
        if (!eqObjects(object1[k], object2[k])) {
          return false;
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
    return true;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false