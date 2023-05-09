const { MarkovMachine } = require("./markov.js");

//TODO: where does it make sense to set this up?
beforeEach(function () {
  const chain = MarkovMachine("the cat in the hat");
});

describe("tests for getChains", function () {
  //does it return an object of a certain shape
  //does it properly count words
  //very that start/end words are correct
  test("return sum", function () {
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  test("return sum w/neg numbers", function () {
    let sum = add(-2, 3);
    expect(sum).toEqual(1);
  });
});


describe("tests for getText", function () {
  //need chain beforehand
  test("return sum", function () {
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  test("return sum w/neg numbers", function () {
    let sum = add(-2, 3);
    expect(sum).toEqual(1);
  });
});

describe("tests for getRandom", function () {
  test("return sum", function () {
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  test("return sum w/neg numbers", function () {
    let sum = add(-2, 3);
    expect(sum).toEqual(1);
  });
});
