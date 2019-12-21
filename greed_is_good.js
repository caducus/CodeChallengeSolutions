function score( dice ) {
  let scoreObject = {};
  for (let i = 0; i < dice.length; i++) {
    if (!scoreObject[dice[i]]) {
      scoreObject[dice[i]] = 1;
    } else {
      scoreObject[dice[i]] +=1;
    };
  };
  let scoreArray = Object.entries(scoreObject);
  let totalScore = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    let diceCount = scoreArray[i][1];
    let diceFace =  parseInt(scoreArray[i][0], 10);
    // if diceCount > 3
    if (diceCount >= 3) {
      if (diceFace === 1) {
        totalScore += 1000
      } else {
        totalScore += diceFace * 100;
      };
      diceCount -= 3;
    };
    // if diceCount < 3
    if (diceFace === 1) {
      if (diceCount === 1) {
        totalScore += 100;
      } else if (diceCount === 2) {
        totalScore += 200;
      };
    } else if (diceFace === 5) {
      if (diceCount === 1) {
        totalScore += 50;
      } else if (diceCount === 2) {
        totalScore += 100;
      };
    };
  };
  return totalScore;
};

score([2, 3, 4, 6, 2]);
score([4, 4, 4, 3, 3]);
