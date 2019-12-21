function mergeRanges(meetingTimes) {
  // empty array to hold arrays of meeting times
  let meetingArray = [];
  // loop through meetingTimes array
  for (let i = 0; i < meetingTimes.length; i++) {
    // empty tempArray holds each individual meeting start and end time
    tempArray = [];
      // map object to create array
      Object.keys(meetingTimes[i]).map(function (key) {
        // push meeting time to tempArray
        tempArray.push(meetingTimes[i][key])
      });
    // push tempArray to meetingArray
    meetingArray.push(tempArray);
  };
  console.log("Unsorted array: " + meetingArray);
  // sort meetingArray by start time
  let sortedArray = meetingArray.sort(function(a, b) {
    return a[0] - b[0];
  });
  console.log("Sorted array: " + meetingArray);
  // flatten meetingArray
  meetingArray = meetingArray.flat();
  // incriment in 2s, starting at the 3rd element
  for (let i = 2; i < meetingArray.length; i +=2) {
    if (meetingArray[i] <= meetingArray[i-1] && meetingArray[i] > meetingArray[i-2]) {
      if (meetingArray[i+1] < meetingArray[i-1]) {
        meetingArray.splice(i, 2);
      } else {
        meetingArray.splice(i-1, 2)
      };
    };
  };
  let finalTimes = [];
  for (let i = 0; i < meetingArray.length; i +=2) {
    let tempObject = {startTime: meetingArray[i], endTime: meetingArray[i+1]}
    finalTimes.push(tempObject);
  };
  return finalTimes;
};

let testArray = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

let testArray2 = [
  {startTime: 2, endTime: 4},
  {startTime: 9, endTime: 12},
  {startTime: 5, endTime: 9},
  {startTime: 6, endTime: 7}
]

console.log(mergeRanges(testArray));
// testArray2 is full of failure, but testArray1 works at least. STILL NEEDS TWEAKING, for example, arrays with no meeting times at 0 should start at 0 instead of earliest meet time.
