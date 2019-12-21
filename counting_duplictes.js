// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Examples:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  // create an empty object to hold letter:count
  let alphabetObject = {};
  // split string into array of letters
  let stringArray = text.split("");
  // loop through letters and count them in an object
  for (let i = 0; i < stringArray.length; i++) {
    letterToLowercase = stringArray[i].toLowerCase();
    // if the letter does not yet exist in the object, create it and assign it a value of 1
    if (!alphabetObject[letterToLowercase]) {
      alphabetObject[letterToLowercase] = 1;
    // if the letter already exists, increase the value by 1
    } else {
      alphabetObject[letterToLowercase] += 1;
    };
  };
  // create an array to hold the results of the alphabetObject
  let countArray = Object.values(alphabetObject);
  // create an empty variable to hold the count
  let totalNumberOfLettersRepeated = 0;
  // loop through the array of values to see how many letters were repeated more than once
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > 1) {
      totalNumberOfLettersRepeated += 1;
    };
  };
  // return the total number of letters repeated
  return totalNumberOfLettersRepeated;
};

// TEST CASE
duplicateCount("aabbcde");
duplicateCount("Indivisibilities");
