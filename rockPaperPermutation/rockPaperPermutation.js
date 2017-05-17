/*

Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

Examples
Input	Output
roundCount:
1	[ "r", "p", "s" ]
roundCount:
2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
roundCount:
0	[ ]

*/

function rockPaperPermutation (roundCount) {

 var results= [];
 var choices = ['r', 'p', 's'];

 if (roundCount) {

  var recurse = function(myString) {
    if (myString.length === roundCount) {
      results.push(myString);
      return
    }

    for (var i = 0; i < choices.length; i++) {
      recurse(myString + choices[i]);
    }
  }
  recurse('');
 }
 return results;
};
