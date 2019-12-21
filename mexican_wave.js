function wave(string){
  // holds "wave" words
  resultArray = [];
  // split string into an array
  stringArray = string.split("");
  // loop through the letters an capitalize one at a time;
  for (let i = 0; i < stringArray.length; i++) {
    // changes the current index to uppercase;
    stringArray[i] = stringArray[i].toUpperCase();
    // change the letter that came before to lowercase
    if (i > 0) {
      stringArray[i-1] = stringArray[i-1].toLowerCase();
    }
    // push the joined string to the results if the index does not equal an "empty seat"
    if (stringArray[i] !== " ") {
      resultArray.push(stringArray.join(""));
    };
  };
  console.log(resultArray);
};

wave(" hello world");
