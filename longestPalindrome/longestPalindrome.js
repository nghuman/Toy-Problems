// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
//
// Examples
// Input	                                      Output
// string:
// "aibohphobia"	                            "aibohphobia"
// string:
// "My dad is a racecar athlete"	            "a racecar a"
// string:
// "There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg" should return ' tattarrattat '
//

const longestPalindrome = function (string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    // quick reference to the current letter in the string
    let currentLetter = string[i];
    // find the last occurance of the letter in the string
    let firstOccurance;
    for (let j = i + 1; j < string.length; j++) {
      if (currentLetter === string[j]) {
        // we found an occurance that matches the current letter
        firstOccurance = j;
        // generate the substring to match
        let subStr = string.slice(i, firstOccurance + 1);
        // check if the substring is a palindrom and if it is longer then longest
        if (subStr.length > longest.length && subStr.toLowerCase() === subStr.split('').reverse().join('').toLowerCase()) {
              longest = subStr;
        }
      }
    }
  }
  // return the longest palindrome
  return longest;
};
