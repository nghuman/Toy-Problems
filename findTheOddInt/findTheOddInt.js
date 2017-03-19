// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

const findOdd = (A) => {
  let obj = {};

  A.forEach(function(num) {
    obj[num] === undefined ? obj[num] = 1 : obj[num]++;
  });

  for (let key in obj) {
    if (obj[key] % 2 !== 0) return Number(key);
  }
}
