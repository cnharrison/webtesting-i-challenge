const { repair } = require("./enhancer.js");
// test away!

const item = {
  name: "the mf test item",
  durability: 75,
  enhancement: 30
};

console.log(repair(item));

describe("repair function", () => {
  it("sets durability to 100", () => {
    const result = repair(item);
    expect(result.durability).toBe(100);
  });
});
