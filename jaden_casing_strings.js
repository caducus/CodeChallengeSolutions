// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  // split string by word into a sentenceArray
  let sentenceArray = this.split(" ");
  // loop through the sentenceArray to select word
  for (let i = 0; i < sentenceArray.length; i++) {
    // split the selected word by letter into a wordArray
    let wordArray = sentenceArray[i].split("");
    // replace the first letter with letter to uppercase
    wordArray[0] = wordArray[0].toUpperCase();
    // create empty string to hold word
    let word = "";
    // loop through the wordArray
    for (let j = 0; j < wordArray.length; j++) {
      // add each letter into the empty string
      word = word + wordArray[j];
    };
    // replace the word in the sentenceArray with new uppercase version
    sentenceArray[i] = word;
  };
  // create empty string to hold sentence
  let sentence = "";
  // loop through the sentenceArray
  for (let i = 0; i < sentenceArray.length; i++) {
    // add each word into the empty string
    sentence = sentence + sentenceArray[i] + " ";
  };
  // cut excess whitespace from both ends, return string
  return sentence.trim();
};
