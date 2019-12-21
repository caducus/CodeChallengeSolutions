function calculate(str) {
  // split the string into an array
  let array = str.split("p").join(",").split("m").join(",").split("s").join(",").split(",");
  // loop through the array
  for (let i = 0; i < array.length; i += 2) {
    // parse numeric strings to integers
    array[i] = parseInt(array[i]);
  };
  // loop through the array
  for (let i = 1; i < array.length; i += 2) {
    // if "[p]lu[s]", add the number that comes before and after
    if (array[i] === "lu") {
      array[i+1] = array[i-1] + array[i+1];
    // if "[m]inu[s]", subtract the number that comes before and after
    } else if (array[i] === "inu") {
      array[i+1] = array[i-1] - array[i+1];
    };
  };
  // take the final result and convert to a string
  str = array[array.length - 1].toString();
return str;
};

let test1 = "1plus2plus3plus4" // "10"
let test2 =   "1plus2plus3minus4" // "2"

calculate(test1);
calculate(test2);
