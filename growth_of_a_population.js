function nbYear(p0, percent, aug, p) {
  let totalYears;
  for (let i = 1; p0 < p; i++) {
    p0 += p0*(percent*0.01);
    p0 += aug;
    totalYears = i;
  };
  return totalYears;
};

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));

  // function addYear(p0, percent, aug, p, totalYears) {
  //   console.log();
  //   if (p0 <= p) {
  //     p0 += p0*(percent*0.01);
  //     p0 += aug;
  //     totalYears += 1;
  //     addYear(p0, percent, aug, p, totalYears);
  //   } else {
  //     return totalYears;
  //   };
  // };
