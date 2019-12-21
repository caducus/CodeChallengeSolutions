// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079

// Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// Example
// madam -> True
// adamm -> True
// junk -> False

// Hint
// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.

function permuteAPalindrome (input) {
  // empty object to hold letters and letter counts
  const countLetters = {};
  // split word into letters
  letterArray = input.split("");
  // loop through the array to count letters
  for (let i = 0; i < letterArray.length; i++) {
    if (countLetters[letterArray[i]]) {
      countLetters[letterArray[i]] += 1;
    } else {
      countLetters[letterArray[i]] = 1;
    };
  };
  // variable to count single letters
  let singleLetterCounter = 0;
  // loop through the letters in the countLetters object
  Object.values(countLetters).forEach((value) => {
    // check if the counts are evenly divisible by 2
    if (value % 2 !== 0) {
      singleLetterCounter += 1;
    };
  });
  // if length of word is even
  if (input.length % 2 === 0) {
    if (singleLetterCounter === 0) {
      return true;
    };
  // if the length of the word is odd
  } else {
    if (singleLetterCounter === 1) {
      return true;
    };
  };
  return false;
};

// TEST CASES
console.log(permuteAPalindrome("a")); // true
console.log(permuteAPalindrome("baa")); // true
console.log(permuteAPalindrome("baad")); // false
