function isPrime(num) {
  // check if number is 2
  if (num === 2 || num === 3) {
    return true;
  // check if a number is even or less than 1
} else if (num % 2 === 0 || num <= 1) {
    return false;
  // all other numbers
  } else {
    const squareRt = Math.sqrt(num);
    let isPrime = false;
    for (let i = 2 ; i <= squareRt; i++) {
      if (num % i === 0) {
        return false;
        break;
      } else {
        isPrime = true;
      };
    };
    return isPrime;
  };
};

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(41));
