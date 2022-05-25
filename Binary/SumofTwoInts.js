var getSum = (a, b) => {
  const firstArr = new Array(a).fill(true);
  const secondArr = new Array(b).fill(true);
  console.log(firstArr);
  console.log(secondArr);
  return firstArr.concat(secondArr).length;
};

console.log(getSum(5, 6))