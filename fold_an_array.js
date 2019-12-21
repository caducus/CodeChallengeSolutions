// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// A little visualization (NOT for the algorithm but for the idea of folding):

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*

// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// USING RECURSION
function foldArray(array, runs) {
  // a new array so that input array is not modified
  let newArray = array;
  // an empty temporary array
  let tempArray = [];
  // a variable to hold number of loops
  let numOfLoops = 0;
  // keeping track of if the array.length is odd or even
  let isEven = true;
  // check how many loops are needed
  // check if array.length is even or odd
  if (array.length % 2 == 0) {
    numOfLoops = array.length / 2;
  } else {
    numOfLoops = (array.length - 1) / 2;
    isEven = false;
  }
  // loop through the array
  for (let i = 0; i < numOfLoops; i++) {
    // add the current index and the last index, then push to newArray
    tempArray.push(newArray[i] + newArray[newArray.length-1]);
    // pop off last index
    newArray.pop();
  }
  // if the array is an odd number
  if (isEven == false) {
    // then push the last number (which is the middle number of the original array) to the newArray
    tempArray.push(newArray[newArray.length-1]);
  }
  // runs - 1 every time the function runs
  runs -= 1;
  // if runs is 0, stop function
  if (runs > 0) {
    return foldArray(tempArray, runs);
    // else run function again
  } else {
    return tempArray;
  };
};

// WITHOUT RECURSION
function foldArray(array, runs) {
    // a new array so that input array is not modified
    let newArray = array;
    // an empty temporary array
    let tempArray = [];
    // a variable to hold number of loops
    let numOfLoops = 0;
    // keeping track of if the array.length is odd or even
    let isEven = true;
    // loop through array equal to number of runs
    for (let i = 0; i < runs; i++) {
    // check how many loops are needed
    // check if array.length is even or odd
    if (newArray.length % 2 == 0) {
      numOfLoops = newArray.length / 2;
      isEven = true;
    } else {
      numOfLoops = (newArray.length - 1) / 2;
      isEven = false;
    };
    // loop through current equal to number of loops
    for (let j = 0; j < numOfLoops; j++) {
      // add the current index and the folded index then push to newArray
      tempArray.push(newArray[j] + newArray[newArray.length-(1+j)]);
    };
    // if the array is an odd number
    if (isEven == false) {
      // then push the middle number to the newArray
      tempArray.push(newArray[newArray.length-(numOfLoops + 1)]);
    };
    // set newArray to equal tempArray
    newArray = tempArray;
    // empty tempArray
    tempArray = [];
  };
  return newArray;
};

// TEST CASES
var array = [ 1, 2, 3, 4, 5 ];
var runs = 1;
// expected = [ 6, 6, 3 ];

foldArray(array, runs);

var array = [ 1, 2, 3, 4, 5 ];
var runs = 3;
// expected = [15];

foldArray(array, runs);
