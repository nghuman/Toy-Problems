// Integer Reverse
// Given a positive integer n,
// return its digits reversed.
// DO NOT CONVERT n INTO A STRING OR ARRAY.
// Only use integers and math in your solution.

const reverseInteger = (n) => {

  let reverse = 0;

  while (n !== 0) {
    reverse = (reverse * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverse;
}
