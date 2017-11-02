// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.
//
// 2x2 MATRIX EXAMPLE:
//
// [ [1, 2],
// [3, 4] ]
//
// Rotated:
//
// [ [3, 1],
// [4, 2] ]
//
// 4x4 MATRIX EXAMPLE:
//
// [ [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, “A”,”B”,”C”],
// [“D”,”E”,”F”,”G”] ]
//
// Rotated:
//
// [ [“D”, 9, 5, 1],
// [“E”, “A”, 6, 2],
// [“F”,”B”, 7, 3],
// [“G”,”C”, 8, 4] ]

rotateMatrix = (matrix) => {
  // Write your code here, and
  // return your final answer.
  let newMatrix = [];
  let N = matrix.length;

  for (let col = 0; col < N; col++) {
    let newRow = [];
    for (let row = 0; row < N; row++) {
      let item = matrix[row][col];
      newRow.unshift(item)
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}
