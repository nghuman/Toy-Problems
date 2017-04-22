// Description:
//
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("

function duplicateEncode(word){

  let obj = {};
  let encode = "";

  for (let i = 0; i < word.length; i++) {
    let ele = word[i].toLowerCase();
    if (!obj[ele]) obj[ele] = 1;
    else obj[ele] ++;
  }

  for (let j = 0; j < word.length; j++) {
    let ele = word[j].toLowerCase();
    if (obj[ele] > 1) encode += ")";
    else encode += "(";
  }

  return encode;
}
