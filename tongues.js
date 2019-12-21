function tongues(code) {
  const vowelArray = ["a", "i", "y", "e", "o", "u"];
  const consArray = ["b", "k", "x", "z", "n", "h", "d", "c", "w", "g", "p", "v", "j", "q", "t", "s", "r", "l", "m", "f"];
  let translatedCode = ""
  // seperate the string in an array, so that we can loop through it and access each character
  const codeArray = code.split("");
  for (let i = 0; i < codeArray.length; i++) {
    // check to see if it's cap or lower case
    let currentLetter = codeArray[i];
    let lowerLetter = currentLetter.toLowerCase();
    // check to see if it's a vowel or a cons
    let isVowel = false;
    for (let j = 0; j < vowelArray.length; j++) {
      if (lowerLetter === vowelArray[j]) {
        isVowel = true;
      };
    };
    // perform character translation if needed
    let charPlacement = "";
    let translatedLetter = "";
    if (isVowel === false) {
      charPlacement = consArray.indexOf(lowerLetter);
      if (charPlacement === -1) {
        translatedLetter = currentLetter;
      } else {
        charPlacement += 10;
        if (consArray.length <= charPlacement) {
          translatedLetter = consArray[charPlacement - consArray.length]
        } else {
          translatedLetter = consArray[charPlacement];
        };
      };
    } else {
      charPlacement = vowelArray.indexOf(lowerLetter);
      charPlacement += 3
        if (vowelArray.length <= charPlacement) {
          translatedLetter = vowelArray[charPlacement - vowelArray.length]
        } else {
          translatedLetter = vowelArray[charPlacement];
        };
    };
    if (currentLetter !== lowerLetter) {
      translatedLetter = translatedLetter.toUpperCase();
    };
    translatedCode += translatedLetter;
  };
  return translatedCode;
};

tongues('Ita dotf ni dyca nsaw ecc.');
