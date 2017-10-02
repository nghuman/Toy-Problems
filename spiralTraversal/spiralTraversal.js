// Spiral Traversal
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.
//
// Examples
// Input	                                                           Output
// matrix:
// [ [ 1, 2, 3, 4, 5 ],                [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
// [ 6, 7, 8, 9, 10 ],
// [ 11, 12, 13, 14, 15 ],
// [ 16, 17, 18, 19, 20 ],
// [ 21, 22, 23, 24, 25 ] ]
//

function spiralTraversal (matrix) {

  let result = []

  let recurse = (array) => {

    if (matrix.length === 0) return

    //get first row
    result = result.concat(matrix.shift())

    //traverse down and get last element of each row
    for (let i = 0; i < matrix.length; i++) {
      result = result.concat(matrix[i].splice(matrix[i].length - 1, 1))
    }

    //get last row
    if (matrix.length > 0) {
      result = result.concat(matrix.pop().reverse())
    }

    //traverse up and get first element of each row
    for (let j = matrix.length - 1; j > 0; j--) {
      result = result.concat(matrix[j].splice(0, 1))
    }

    recurse(array)
  }

  recurse(matrix)
  return result
}

            // [[1,  2,   3,  4],
            // [5,  6,   7,  8],
            // [9,  10, 11, 12],
            // [13, 14, 15, 16]];
