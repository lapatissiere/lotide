const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [5, 6, 7, 8, 9] for [4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(tail([4, 5, 6, 7, 8, 9]), [5, 6, 7, 8, 9]);
  });
});
