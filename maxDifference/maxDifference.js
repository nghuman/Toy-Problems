// Given an array of integer elements,
// return the maximum difference of any pair of numbers such that the larger number of the pair occurs at a higher index than the smaller.

function maxDifference(arr) {

  let maxDiff = arr[1] - arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    maxDiff = Math.max(maxDiff, arr[i] - min);
  }

  return maxDiff <= 0 ? -1 : maxDiff;
}
