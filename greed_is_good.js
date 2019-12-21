// https://www.codewars.com/kata/5270d0d18625160ada0000e4

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function score( dice ) {
  // empty object to hold the score
  let scoreObject = {};
  // loop through the array of dice faces
  for (let i = 0; i < dice.length; i++) {
    // if the dice face does not exist within the scoreObject, create it and give it a value of 1
    if (!scoreObject[dice[i]]) {
      scoreObject[dice[i]] = 1;
    // if the dice face already exists within the scoreObject, increase the value by 1
    } else {
      scoreObject[dice[i]] +=1;
    };
  };
  // create an array that contains all key and value pairs within the scoreObject
  let scoreArray = Object.entries(scoreObject);
  // create a variable to hold the total score, assign it the value of 0
  let totalScore = 0;
  // loop through the scoreArray of arrays
  for (let i = 0; i < scoreArray.length; i++) {
    // set the diceCount to the second element in the selected array
    // this is the number of times this die appeared in the original array
    let diceCount = scoreArray[i][1];
    // set the diceFace to the first element in the selected array, and change the element from a string to a number
    // this is the actual face of the die that appeared in the original array
    let diceFace =  parseInt(scoreArray[i][0], 10);
    // if diceCount is greater than 3
    if (diceCount >= 3) {
      if (diceFace === 1) {
        totalScore += 1000
      } else {
        totalScore += diceFace * 100;
      };
      diceCount -= 3;
    };
    // if diceCount less than 3
    if (diceFace === 1) {
      if (diceCount === 1) {
        totalScore += 100;
      } else if (diceCount === 2) {
        totalScore += 200;
      };
    } else if (diceFace === 5) {
      if (diceCount === 1) {
        totalScore += 50;
      } else if (diceCount === 2) {
        totalScore += 100;
      };
    };
  };
  // return the totalScore
  return totalScore;
};

// TEST CASE
score([2, 3, 4, 6, 2]);
score([4, 4, 4, 3, 3]);
