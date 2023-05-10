const { MarkovMachine } = require("./markov.js");

let chain;
beforeEach(function () {
  chain = new MarkovMachine("The cat in the hat.");
});

describe("tests for getChains", function () {

  test("return obj shape", function () {
    let correctChain = chain.getChains();
    expect(correctChain).toEqual({
      The: ["cat"],
      cat: ["in"],
      in: ["the"],
      the: ["hat."],
      "hat.": [null],
    });
  });

  test("Check repeat keys", function () {
    const chainsKeyTest = new MarkovMachine("The cat in in in the hat.");
    let correctChain = chainsKeyTest.getChains();
    expect(Object.keys(correctChain).length).toEqual(5);
  });

  test("check proper word counts", function () {
    const chainsKeyTest = new MarkovMachine("The cat in in in the hat.");
    let correctChain = chainsKeyTest.getChains();
    expect(correctChain["in"].length).toEqual(3);
    expect(correctChain["the"].length).toEqual(1);
  });

  test("return correct start & end words", function () {
    let correctChain = chain.getChains();
    expect(correctChain["The"]).toEqual(["cat"]);
    expect(correctChain["hat."]).toEqual([null]);
  });
});

describe("tests for getText", function () {
  let testChain = new MarkovMachine('The cat in the hat.');


  test("getText should return a string", function () {
    expect.any(String);
  });


  test("getText should return expected string", function () {
    const outputChain = testChain.getText();
    expect(outputChain).toEqual('The cat in the hat.');
  });

  test("getText should return a string of the expected length", function () {
    const outputChain = testChain.getText();
    expect(outputChain.length).toEqual(19);
    expect(outputChain.split(' ').length).toEqual(5);
  });

});

describe("tests for getRandom", function () {

  test("test for known index", function () {
    let index = chain.getRandomIndex('cat');
    expect(index).toEqual(0);
  });

  test("test for type", function () {
    let index = chain.getRandomIndex('cat');
    expect.any(Number);
  });

  test("test for range", function () {
    const chainsKeyTest = new MarkovMachine("in in in in in in");
    let index = chainsKeyTest.getRandomIndex('in');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThanOrEqual(5);
  });


});