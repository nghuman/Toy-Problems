// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?
//
// Parameters:
//
// string (required) - a string of characters.
//
// Examples
// Input	Output
// string:
// "abc"	[ "abc", "acb", "bac", "bca", "cab", "cba" ]

const allAnagrams = (string) => {
  let storage = {};

  const recurse = (built, avail) => {
    if (built.length === string.length) {
      storage[built] = true;
    } else {
      for (let i = 0; i < avail.length; i++) {
        recurse(built + avail[i], avail.slice(0, i) + avail.slice(i+1));
      }
    }
  }

  recurse('', string);

  return Object.keys(storage);
}
