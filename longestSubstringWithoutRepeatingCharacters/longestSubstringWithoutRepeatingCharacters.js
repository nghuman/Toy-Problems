// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
// Given "dvdf", the answer is "vdf", with the length of 3.


const lengthOfLongestSubstring = function(string) {
    let longestStr = "";
    let max = 0;

    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      let index = longestStr.indexOf(letter);
      if (index !== -1) {
        longestStr = longestStr.slice(index + 1);
      }
      longestStr += letter;
      max = Math.max(max, longestStr.length);
    }

    return max;
};
