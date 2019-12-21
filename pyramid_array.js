function pyramid(n) {
  // create an empty array to hold the final array
  let array = [];
  // loop the number specified by the user parameter
  for (let i = 0; i < n; i++) {
    // create a second temporary array
    let temp_array = [];
    // create a second loop inside the parameter loop
    for (let j = 0; j <= i; j++) {
      // push "1" to the temporary array
      temp_array.push(1);
    };
    // push the temporary array to the final array
    array.push(temp_array);
  };
  return array;
};

// pyramid(0);
// pyramid(1);
// pyramid(2);
pyramid(3);
