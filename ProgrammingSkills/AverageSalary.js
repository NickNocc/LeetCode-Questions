var average = function (salary) {
  var minSal = salary[0];
  var maxSal = salary[0];
  var average = 0;
  var tempSalary = salary;
  salary.map((number) => {
    if (number < minSal) {
      minSal = number;
    } else if (number > maxSal) {
      maxSal = number;
    }
  });
  tempSalary = tempSalary.filter((x) => x !== minSal);
  tempSalary = tempSalary.filter((x) => x !== maxSal);

  tempSalary.map((number) => {
    average = average + number;
    console.log(average);
  });
  average = average / tempSalary.length;
  return average;
};

average([4000, 3000, 1000, 2000]);
