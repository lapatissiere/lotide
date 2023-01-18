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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
