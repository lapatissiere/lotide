let assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
   console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const array1 = [1,2,3,4,5];
const array2 = [1,2,3,6,5];

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
console.log(eqArray(array1, array2));

// compare number of elements in both arrays



//if # of elements are equal

    //loop through both elements to check for values

        //if values are equal

          // return assertEqual = true
        
        //else return assertEqual = false

//else return assertEqual = false









