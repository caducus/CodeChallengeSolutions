// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba

// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

// All inputs will be lower case.

// For example:
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

function solve(st) {
  // create an empty object to hold the letter:value pairs
  let alphabetObject = {};
  // split string up by letter, put characters in an array
  let letterArray = st.split("");
  // loop through the array backwards
  for (let i = letterArray.length - 1; i >= 0; i--) {
    // if the letter does not exist in the object, create it
    if (!alphabetObject[letterArray[i]]) {
      alphabetObject[letterArray[i]] = 0;
    };
    // find first index of letter
    let firstIndex = letterArray.indexOf(letterArray[i]);
    // compare first index of letter to last index of letter
    // if there is a difference between the first and last index, set the letter:value to the numerical difference.
    if (firstIndex < i) {
      if (alphabetObject[letterArray[i]] < i - firstIndex) {
        alphabetObject[letterArray[i]] = i - firstIndex;
      };
    };
    // if the first and last index of the letter are the same, and this is the only time the letter has appeared
    if (firstIndex === i && alphabetObject[letterArray[i]] === 0) {
      alphabetObject[letterArray[i]] = -1;
    };
  };
  // find the max value
  const values = Object.values(alphabetObject);
  const maxValue = Math.max(...values);
  // create an array of all letters that match the max value
  const entries = Object.entries(alphabetObject);
  let maxLetter = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] === maxValue) {
      maxLetter.push(entries[i][0]);
    };
  };
  // sort into alphabetical order
  maxLetter.sort();
  return maxLetter[0];
};

// TEST CASES
solve("a"); // a
solve("aa"); // a
solve("bcd"); // b
solve("axyzxyz"); // x
solve("aabccc"); // c
