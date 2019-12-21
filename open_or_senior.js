function openOrSenior(data){
  // array to hold results
  let results = []
  // loop through the data
  for (i = 0; i < data.length; i++) {
    // if age is greater than 55
    // and handicap is greater than 7
    if (data[i][0] >= 55 && data[i][1] > 7) {
      results.push("Senior")
    } else {
      results.push("Open")
    }
  }
  return results
}

test1 = [[45, 12],[55,21],[19, -2],[104, 20]]
// results 'Open', 'Senior', 'Open', 'Senior'

test2 = [[3, 12],[55,1],[91, -2],[54, 23]]
// results 'Open', 'Open', 'Open', 'Open'

test3 = [[59, 12],[55,-1],[12, -2],[12, 12]]
// results = 'Senior', 'Open', 'Open', 'Open'

openOrSenior(test1)
openOrSenior(test2)
openOrSenior(test3)
