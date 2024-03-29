// https://www.codewars.com/kata/523d2e964680d1f749000135

// Create a function, that accepts an arbitrary number of arrays and returns a single array generated by alternately appending elements from the passed in arguments. If one of them is shorter than the others, the result should be padded with empty elements.

function interleave() {
  // empty array to hold the final result
  let newArr = [];
  // variable to hold number of arrays given in argument
  let numOfArrays = arguments.length;
  // variable to hold which array within the argument is the longest
  let largestArray = 0;
  // loop through the arrays within the argument
  for (let i = 0; i < arguments.length; i++) {
    // if the length of the current array is greater than current number within the largestArray variable
    if (arguments[i].length > largestArray) {
      // overwrite the largestArray with the length of the current array
      largestArray = arguments[i].length;
    };
  };
  // first loop: i selects the position within the array
  for (let i = 0; i < largestArray; i++) {
    // second loop: j selects the array from the arguments given
    for (let j = 0; j < numOfArrays; j++) {
      // if the element is equal to 0, push 0
      if (arguments[j][i] === 0) {
        newArr.push(0);
      // if the element does not exit, push null
      } else if (!arguments[j][i]) {
        newArr.push(null);
      // if the element exists, push the element
      } else {
        newArr.push(arguments[j][i])
      };
    };
  };
  // return the array which contains all items that have been pushed into the proper order
  console.log(newArr);
  return newArr;
};


// TEST CASES

interleave([1, 2, 3], ["c", "d", "e"]);

interleave([1, 2, 3, 4], [7, 8, 9]);

interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]);

interleave([0, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], ["a", "b", "c"], ["d", "e", "f"], ["h", "i", "j"], ["k", "l", "m"]);
