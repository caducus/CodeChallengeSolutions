function findOutlier(integers){
  let even = [];
  let odd = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    };
  };
  if (odd.length < even.length) {
    console.log(odd[0]);
    return odd[0];
  } else {
    console.log(even[0]);
    return even[0];
  };
};

test1 = [0, 1, 2];
test2 = [1, 2, 3];
test3 = [2,6,8,10,3];
test4 = [0,0,3,0,0];
test5 = [1,1,0,1,1];

findOutlier(test1)
findOutlier(test2)
findOutlier(test3)
findOutlier(test4)
findOutlier(test5)
