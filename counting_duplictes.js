function duplicateCount(text){
  // empty object to hold letter:count
  let alphabetObject = {};
  // split string into array of letters
  let stringArray = text.split("");
  // loops through letters and count them in an object
  for (let i = 0; i < stringArray.length; i++) {
    letterToLowercase = stringArray[i].toLowerCase();
    // if the letter does not get exist in the object, create it
    if (!alphabetObject[letterToLowercase]) {
      alphabetObject[letterToLowercase] = 1;
    } else {
      alphabetObject[letterToLowercase] += 1;
    };
  };
  // push results into an array to see if there are any repeating characters
  let countArray = Object.values(alphabetObject);
  // empty variable to hold the count
  let totalNumberOfLettersRepeated = 0;
  // loop through the array of values to see how many letters were repeated more than once
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > 1) {
      totalNumberOfLettersRepeated += 1;
    }
  }
  return totalNumberOfLettersRepeated;
};

duplicateCount("aabbcde");
duplicateCount("Indivisibilities");
