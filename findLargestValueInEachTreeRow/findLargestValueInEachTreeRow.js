// You need to find the largest value in each row of a binary tree.
//
// Example:
// Input:
//
//           1
//          / \
//         3   2
//        / \   \
//       5   3   9
//
// Output: [1, 3, 9]


var largestValues = function(root) {
    if (root === null) return [];
    var left = largestValues(root.left);
    var right = largestValues(root.right);

    var ret = [];
    for(var i = 0; i < left.length || i < right.length; i++) {
        if (left[i] === undefined) {
            ret.push(right[i]);
        } else if (right[i] === undefined) {
            ret.push(left[i]);
        } else {
            ret.push(Math.max(right[i], left[i]));
        }
    }
    ret.unshift(root.val);

    return ret;
};

// let TreeNode = {
//   val: 1,
//   right:
//     {
//      val: 2,
//      right:  { val: 9, right: null, left: null },
//      left: null },
//   left:
//     {
//      val: 3,
//      right:  { val: 3, right: null, left: null },
//      left:  { val: 5, right: null, left: null } } };
//
// largestValues(TreeNode);
