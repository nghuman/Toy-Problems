// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//
// Examples
// Input	                                       Output
// array:
// [ [ 5 ], [ [ ] ] ]	                                      2
// array:
// [ 10, 20, 30, 40 ]	                                      1
// array:
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	                                      4
// array:
// [ ]	0
// array:
// [ [ [ ] ] ]	                                      0

const arrayception = (array) => {

  let ans = 0;

  const recurse = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

      if(Array.isArray(item)) {
        recurse(item, depth + 1);
      } else {
        ans = Math.max(depth, ans);
      }
    }
  }

  recurse(array, 1);
  return ans;
}
