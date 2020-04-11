// jshint esversion: 7
var arrAVG = listA => {
  let sum = 0;
  for (let i = 0; i < listA.length; i++) {
    sum = sum + listA[i];
  }
  let average = sum / listA.length;
  return average;
};

arrAVG([6, 2, 4]);
