const assertEqual = require("./assertEqual");

let array = [1, 2, 3, 4, 5];
function tail(array) {
  return array.slice(1);
}
console.log(tail(array));

module.exports = tail;
