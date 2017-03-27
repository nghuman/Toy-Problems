// Alphabet Inventory
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
//
// Examples
// Input	Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"	"a:2,b:2,c:2"
// alphabet:
// "x"
// text:
// "Racer X is my friend :)"	"x:1"
// alphabet:
// "123"
// text:
// "o hai"	"no matches"

const alphaCount = (alphabet, text) => {

  let obj = {};
  let newText = text.toLowerCase().split("");
  let output = "";

  newText.forEach(function(ele) {
    if (obj[ele]) obj[ele] ++;
    else {
      obj[ele] = 1;
    }
  });

  for (let i = 0; i < alphabet.length; i++) {
    let ele = alphabet[i].toLowerCase();

    if (obj[ele]) output += ele + ":" + obj[ele] + ",";
  }

  return output.length > 0 ? output.slice(0, -1) : "no matches";
}
