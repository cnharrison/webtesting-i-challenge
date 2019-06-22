const { repair, fail } = require("./enhancer.js");
// test away!

const item = {
  name: "the mf test item",
  durability: 75,
  enhancement: 30
};

const lowEnhancementItem = {
  name: "low enhancement test item",
  durability: 100,
  enhancement: 14
};

const midEnhancementItem = {
  name: "mid enhancement test item",
  durability: 100,
  enhancement: 15
};

const highEnhancementItem = {
  name: "high enhancement test item",
  durability: 100,
  enhancement: 18
};

describe("repair function", () => {
  it("sets durability to 100", () => {
    const result = repair(item);
    expect(result.durability).toBe(100);
  });
});

describe("failure function", () => {
  it("subtracts 5 from dur if enh < 15", () => {
    const result = fail(lowEnhancementItem);
    expect(result.durability).toBe(lowEnhancementItem.durability - 5);
  });
  it("subtracts 10 from dur if enh >= 15", () => {
    const result = fail(midEnhancementItem);
    expect(result.durability).toBe(midEnhancementItem.durability - 10);
  });
  it("subtracts 1 from enh if enh > 16", () => {
    const result = fail(highEnhancementItem);
    expect(result.enhancement).toBe(highEnhancementItem.enhancement - 1);
  });
});
