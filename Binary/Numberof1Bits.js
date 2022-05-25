var hammingWeight = function (n) {
    console.log(n.toString(2));
  return n
    .toString(2)
    .split("")
    .filter((x) => {
      return x === "1";
    }).length;
};

console.log(hammingWeight(0110110110));
