// Largest Product of Three
// Write a function that accepts an array of integers
// and returns the largest product possible from three of those numbers.

const largestProductOfThree = (array)  => {

  let sorted = array.slice().sort((a, b) => a - b);

  let value1 = sorted[sorted.length - 1]
              * sorted[sorted.length - 2]
              * sorted[sorted.length - 3];

  let value2 = sorted[0]
              * sorted[1]
              * sorted[sorted.length - 1];

  return Math.max(value1, value2);
}
