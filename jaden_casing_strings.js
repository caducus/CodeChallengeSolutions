String.prototype.toJadenCase = function () {
  let sentenceArray = this.split(" ");
  for (let i = 0; i < sentenceArray.length; i++) {
    let wordArray = sentenceArray[i].split("");
    wordArray[0] = wordArray[0].toUpperCase();
    let word = "";
    for (let j = 0; j < wordArray.length; j++) {
      word = word + wordArray[j];
    };
    sentenceArray[i] = word;
  };
  let sentence = "";
  for (let i = 0; i < sentenceArray.length; i++) {
    sentence = sentence + sentenceArray[i] + " ";
  };
  return sentence.trim();
};
