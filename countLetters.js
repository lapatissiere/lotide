const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence){
  console.log("sentence", sentence)
  /**
   * create empty object
   * loop through sentence to get each letter
   *    if this letter is not empty, then get the letter and add it to the results object
   *    if this letter exists in our object, then also add 1
   *    if this letter does not exist in our object, just put 1
   * 
   * return object
   */
  const result = {}
  const chars = sentence.toLowerCase().split('')

  for(const letter of chars){
    if (letter !== " ") {
      if (result[letter]){
        result[letter] += 1
        console.log("Exists", letter)
      } else {
        result[letter] = 1
        console.log("Does not exist.", letter)
      }
      
    }
  }
  return result
}

const result1 = countLetters("LHL")
console.log("result1", result1)
