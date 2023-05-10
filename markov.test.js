const { MarkovMachine } = require("./markov.js");

//TODO: where does it make sense to set this up?
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
  let testChain = new MarkovMachine('The cat in the hat.')

  //check correct type
  //check expected phrase //check start/end word of phrase
  //check correct length

  test("getText should return a string", function () {
    expect(typeof testChain.getText()).toBe('string');
  });


  test("getText should return expected string", function () {
    const outputChain = testChain.getText()
    expect(outputChain).toEqual('The cat in the hat.');
  });

  test("getText should return a string of the expected length", function () {
    const outputChain = testChain.getText()
    expect(outputChain.length).toEqual(19);
    expect(outputChain.split(' ').length).toEqual(5)
  });

});

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
