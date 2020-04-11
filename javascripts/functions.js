// jshint esversion: 6

let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.legnth;
};

let arrMax = arr => {
  let max = arr[0],
    temp;
  arr.forEach(elem => {
    temp = elem;
    if (temp > max) {
      max = temp;
    }
  });

  return max;
};

let sumEvens = arr => {
  let sum = 0;
  for (let i of arr) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  return sum;
};
