// function tickets(peopleInLine){
//   if (peopleInLine[0] !== 25) {
//     return "NO";
//   } else {
//     let changeJar = 25;
//     for (let i = 1; i < peopleInLine.length; i++) {
//       let changeNeeded = peopleInLine[i] - changeJar;
//       if (changeNeeded > changeJar) {
//         return "NO";
//       } else {
//         changeJar -= peopleInLine[i];
//       };
//       return "YES";
//     };
//   };
// };


function tickets(peopleInLine){
  // empty changeJar to keep track of what bills are collected
  let changeJar = {
    twentyFive: 0,
    fifty: 0,
    oneHundred: 0
  };

  // loop through the people in line
  for (let i = 0; i < peopleInLine.length; i++) {
    // if the person pays with $25, take money
    if (peopleInLine[i] === 25) {
      changeJar.twentyFive += 1;
    // if person pays with $50, give $25 and take $50
    } else if (peopleInLine[i] === 50) {
      changeJar.twentyFive -= 1;
      changeJar.fifty += 1;
    } else {
      // if person pays with $100, check if there is at least one $50 and one $25
      // if yes, give one $50 and one $25, and take $100
      if (changeJar.fifty > 0 && changeJar.twentyFive > 0) {
        changeJar.twentyFive -= 1;
        changeJar.fifty -= 1;
        changeJar.oneHundred += 1;
      // if no, give three $25s and take $100
      } else {
        changeJar.twentyFive -= 3;
        changeJar.oneHundred += 1;
      };
    };

    // check to see if the changeJar til of $25 or $50 went into the negatives
    if (changeJar.twentyFive < 0 || changeJar.fifty < 0 ) {
      // if it has, return "NO" and break loop
      return "NO"
    };
  };

  // if able to get to the end of the line, return "YES"
  return 'YES';
};

let test1 = [25, 25, 50, 50];
let test2 = [25, 100];

// console.log(tickets(test1));
// console.log(tickets(test2));
