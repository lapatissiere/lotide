const takeUntil = function(array, callback) {
  const returnArray = [];
  for (let element of array){
    if(!callback(element)){
      returnArray.push(element)
    } else {
      return returnArray
    }
  }
}

const assertArraysEqual = function(actual, expected) {
  if(eqArray (actual, expected)) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArray = function(array1, array2){
  if(array1.length !== array2.length) {
    return false;
  }
  for (let i=0; i < array1.length; i++){
    if(array1[i] !== array2[i])
    return false;
  }
return true;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

[ 1, 2, 5, 7, 2 ]
'---'
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

