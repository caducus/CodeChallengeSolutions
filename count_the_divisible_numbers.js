function divisibleCount(x, y, k) {
  const numberArray = [];
  let total = 0;
  // create an array of numbers between x and y
  for (let i = x; i <= y; i++) {
    numberArray.push(i);
  };
  // divide each number in the array by k
  numberArray.forEach(function(number) {
    if (number % k === 0) {
      total += 1;
    };
  });
  return total;
};

console.log(divisibleCount(6,11,2));
