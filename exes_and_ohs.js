function XO(str) {
    // changes string to lower case
    str = str.toLowerCase();
    // split string into an array
    let stringArray = str.split("");
    // object that holds the count of letters
    let stringObject = {
      x: 0,
      o: 0,
      other: 0
    };
    // loop through the string, counting the number of xs and os in an object
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === "x") {
        stringObject.x += 1;
      } else if (stringArray[i] === "o") {
        stringObject.o += 1;
      } else {
        stringObject.other += 1;
      };
    };
    // check if x and o contain the same number
    if (stringObject.x === stringObject.o) {
      return true
    } else {
      return false
    };
};

XO("xo")
// true

XO("xxOo")
// true

XO("xxxm")
// false

XO("Oo")
// false

XO("ooom")
// false
