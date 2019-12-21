// https://www.codewars.com/kata/52763db7cffbc6fe8c0007f8

// Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).

// Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

// So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'

// The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.

// Your job is to write a function that decodes Gandalf's writings.

function tongues(code) {
  // array that holds all vowels in the correct order
  const vowelArray = ["a", "i", "y", "e", "o", "u"];
  // array that holds all consonants in the correct order
  const consArray = ["b", "k", "x", "z", "n", "h", "d", "c", "w", "g", "p", "v", "j", "q", "t", "s", "r", "l", "m", "f"];
  // empty string to hold the translation
  let translatedCode = ""
  // seperate the string in an array
  const codeArray = code.split("");
  // loop through the array to access each letter
  for (let i = 0; i < codeArray.length; i++) {
    // set the selected letter to the currentLetter variable
    let currentLetter = codeArray[i];
    // lowercase the currentLetter and save it to the lowerLetter variable; use this variable to check against the arrays above
    let lowerLetter = currentLetter.toLowerCase();
    // set the isVowel variable to false
    let isVowel = false;
    // check to see if the current letter is a vowel or a cons
    for (let j = 0; j < vowelArray.length; j++) {
      if (lowerLetter === vowelArray[j]) {
        isVowel = true;
      };
    };
    // empty string to hold the index of the character
    let charIndex = "";
    // empty string to hold the translated letter
    let translatedLetter = "";
    // perform character translation if needed
    // if the charcter is not a vowel, use the consonant array
    if (isVowel === false) {
      // save the index of the character
      charIndex = consArray.indexOf(lowerLetter);
      // if the character is not in the array, keep it exactly as it is
      // (ie. blank space, number, or punctuation)
      if (charIndex === -1) {
        translatedLetter = currentLetter;
      // if the character is in the array, move 10 spaces forward, looping to the beginning of the array if needed
      } else {
        charIndex += 10;
        if (consArray.length <= charIndex) {
          translatedLetter = consArray[charIndex - consArray.length]
        } else {
          translatedLetter = consArray[charIndex];
        };
      };
    // if the character is a vowel, use the vowel array
    // move 3 spaces forward, looping to the beginning of the array if needed
    } else {
      charIndex = vowelArray.indexOf(lowerLetter);
      charIndex += 3
        if (vowelArray.length <= charIndex) {
          translatedLetter = vowelArray[charIndex - vowelArray.length]
        } else {
          translatedLetter = vowelArray[charIndex];
        };
    };
    // check to see if the original letter was uppercase, and return it to uppercase if needed
    if (currentLetter !== lowerLetter) {
      translatedLetter = translatedLetter.toUpperCase();
    };
    // add the translated letter onto the string that holds the translated code
    translatedCode += translatedLetter;
  };
  // return the translated code
  return translatedCode;
};

// TEST CASE
tongues('Ita dotf ni dyca nsaw ecc.');
