/** Textual markov chain generator. */

class MarkovMachine {
  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    const words = this.words;
    const chains = {};

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let nextWord = words[i + 1] || null;
      if (word in chains) {
        chains[word].push(nextWord);
      } else {
        chains[word] = [nextWord];
      }
    }
    return chains;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice.
   *
   * argument:
   *    none
   *
   * returns:
   *    New string
   *
   *    */

  getText() {
    let word = this.words[0];

    const text = [];

    while (word !== null) {
      let randomIndex = this.getRandomIndex(word);
      text.push(word);

      word = this.chains[word][randomIndex];
    }
    return text.join(' ');
  };


  /** Return random index value based on word in chains.*/
  getRandomIndex(word) {
    return Math.floor(Math.random() * (this.chains[word].length));
  }
}

module.exports = {
  MarkovMachine,
};

let machine = new MarkovMachine(
  `Four score and seven years ago
  `);
console.log(machine.getText());
console.log(machine.getChains())


