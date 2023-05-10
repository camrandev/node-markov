const { MarkovMachine } = require("./markov.js");

//TODO: where does it make sense to set this up?

describe("tests for getChains", function () {
  let chain;
  beforeEach(function () {
    chain = new MarkovMachine("The cat in the hat.");
  });

  test("return obj shape", function () {
    let correctChain = chain.getChains();
    expect(correctChain).toEqual({
      "The": ["cat"],
      "cat": ["in"],
      "in": ["the"],
      "the": ["hat."],
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
    expect(correctChain['in'].length).toEqual(3);
    expect(correctChain['the'].length).toEqual(1);
  });

  test("return correct start & end words", function () {
    let correctChain = chain.getChains();
    expect(correctChain["The"]).toEqual(["cat"]);
    expect(correctChain["hat."]).toEqual([null]);
  });
});


// describe("tests for getText", function () {
//   //need chain beforehand
//   //very that start/end words are correct

//   test("return sum", function () {
//     let sum = add(2, 3);
//     expect(sum).toEqual(5);
//   });

//   test("return sum w/neg numbers", function () {
//     let sum = add(-2, 3);
//     expect(sum).toEqual(1);
//   });
// });

// describe("tests for getRandom", function () {
//   test("return sum", function () {
//     let sum = add(2, 3);
//     expect(sum).toEqual(5);
//   });

//   test("return sum w/neg numbers", function () {
//     let sum = add(-2, 3);
//     expect(sum).toEqual(1);
//   });
// });
