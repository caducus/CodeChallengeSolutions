// function dotsAndBoxes(ar){
//     // flatten array so that we can find the highest number
//     let newArray = [].concat.apply([], ar);
//
//     // variables used to determine the game grid
//     const numOfDots = Math.max(...newArray) + 1;
//     const numOfLines = ar[0].length;
//     const numOfRows = Math.sqrt(numOfDots);
//     const numOfBox = (numOfRows-1) * (numOfRows-1);
//
//     // create gameGrid
//     let gameGrid = {};
//     let gridRow = 1;
//     let gridPosition = 0;
//     for (let i = 0; i < numOfRows; i++) {
//       gameGrid[gridRow] = [];
//       for (let j = 0; j < numOfRows; j++) {
//         gameGrid[gridRow].push(gridPosition);
//         gridPosition += 1;
//       };
//       gridRow += 1
//     };
//
//     // use gameGrid to create 4-sided boxes
//     let boxes = [];
//     let initialRow = 1;
//     for (let i = 0; i < numOfRows - 1; i++) {
//       let counter = 0;
//       for (let i=0; i < numOfBox / numOfRows; i++) {
//         let tempArray= [];
//         let sideOne = [gameGrid[initialRow][counter], gameGrid[initialRow][counter+1]];
//         let sideTwo = [gameGrid[initialRow][counter], gameGrid[initialRow+1][counter]];
//         let sideThree = [gameGrid[initialRow][counter+1], gameGrid[initialRow+1][counter+1]];
//         let sideFour = [gameGrid[initialRow+1][counter], gameGrid[initialRow+1][counter+1]];
//         tempArray.push(sideOne, sideTwo, sideThree, sideFour);
//         boxes.push(tempArray);
//         counter +=1;
//       };
//       counter = 0;
//       initialRow += 1;
//     };
//
//     // variables for gameplay
//     let playerOne = true;
//     let playerOneScore = 0;
//     let playerTwoScore = 0;
//     let extraTurn = false;
//
//     // looping through the array which contains player moves
//     for (let i = 0; i < ar.length; i++) {
//       // looping through each complete box
//       for (let j = 0; j < numOfBox; j++) {
//         // looping through the four sides of each box
//         for (let k = 0; k < 4; k++) {
//           let box1 = ar[i]
//           let box2 = boxes[j][k]
//           // if the player moves are equal to the side of the box 'x' the side
//           if (box1[0] === box2[0] && box1[1] === box2[1]) {
//             boxes[j][k][0] = 'x';
//             boxes[j][k][1] = 'x';
//           };
//           if (box1[0] === box2[1] && box1[1] === box2[0]) {
//             boxes[j][k][0] = 'x';
//             boxes[j][k][1] = 'x';
//           };
//         };
//         // check to see if the all four sides of the box have been 'x' off
//         if (boxes[j].toString() === 'x,x,x,x,x,x,x,x') {
//           // if player one completes the box, they get a point
//           if (playerOne === true) {
//             playerOneScore += 1;
//           } else { //otherwise player two gets a point
//             playerTwoScore += 1;
//           };
//           // when one player gets a point, set extra turn to true
//           extraTurn = true;
//           // change the box so that it will no longer be checked so that it won't be checked again
//           boxes[j][0][0] = 'o';
//         };
//       };
//       // if no box has been completed, change player turn
//       if (extraTurn === false) {
//           playerOne = !playerOne
//       } else { // otherwise keep the same player, but reset the extra turn
//         extraTurn = false;
//       }
//     };
//
//     return [playerOneScore, playerTwoScore];
// };

// // Example of someone else's solution from codewars
// function dotsAndBoxes(moves) {
//   const size = Math.sqrt(moves.length / 2 + 0.25) - 0.5;
//   return moves.map(([a,b]) => [Math.min(a, b), Math.max(a, b)]).reduce((r, [f, s]) => {
//     r.grid[f]++;
//     const temp = (f + 1 === s) ? f - size - 1 : f - 1;
//     r.grid[temp]++;
//     r.isFirst = (r.grid[f] === 4 || r.grid[temp] === 4) ? r.isFirst : !r.isFirst;
//     r.score[r.isFirst ? 0 : 1] += (r.grid[f] === 4) + (r.grid[temp] === 4);
//     console.log(r.grid);
//     return r;
//   }, {
//     score: [0, 0],
//     isFirst: true,
//     grid: new Array((size + 1) ** 2).fill(0)
//   }).score;
// }

const testArray1 = [[0,1],[5,9],[9,8],[13,9],[7,11],[0,4],[9,10],[10,6],[4,5],[2,3],[13,14],[4,8],[8,12],[1,5],[5,6],[14,15],[10,11],[2,6],[12,13],[1,2],[10,14],[15,11],[6,7],[3,7]];
const testArray2 = [[0,1],[7,8],[1,2],[6,7],[0,3],[5,8],[3,4],[1,4],[4,5],[2,5],[4,7],[3,6]];
const testArray3 = [[0,1],[1,2],[2,5],[5,4],[4,7],[7,8],[8,5],[1,4],[6,7],[3,6],[3,0],[3,4]];
const testArray4 = [[0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4]];
const testArray5 = [[5,9],[6,10],[9,13],[7,11],[4,5],[5,6],[6,7],[8,12],[1,5],[2,6],[8,9],[10,14],[10,11],[4,8],[12,13],[9,10],[1,2],[11,15],[13,14],[14,15],[0,4],[0,1],[3,7],[2,3]];


console.log(dotsAndBoxes(testArray1));
console.log(dotsAndBoxes(testArray2));
console.log(dotsAndBoxes(testArray3));
console.log(dotsAndBoxes(testArray4));
console.log(dotsAndBoxes(testArray5));
