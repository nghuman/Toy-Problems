// ISBN 10 Checker
// ISBN’s (International Standard Book Numbers) are identifiers for books. Your task is to write a function that verifies a given string is a valid ISBN.
//
// Note: There are ten digits in an ISBN. To verify if they are valid, you must multiply the first digit by 10, the second digit by 9, the third digit by 8, …, the ninth digit by 2, and the tenth digit by 1. Afterwards, divide the sum by 11; if there is no remainder, then it is a valid ISBN. Otherwise, it is invalid.
//
// Note 2: The last digit can also be X, which represents 10.
//
// Examples
// Input	Output
// string:
// "0-3870-0178-6"	true
// string:
// "1442499567"	true
// string:
// "0-440-18293-X"	true
// string:
// "99-440-18293-0"	false

function validateISBN (string) {

  let currDigit = 0;
  let answer = 0;

  for (let i = 0; i < string.length; i++) {
    let ele = parseInt(string[i]);

    if (Number.isInteger(ele)) currDigit ++;

    if (currDigit === 9 && string[i] === 'X') {
      currDigit ++;
      ele = 10;
    }
    if (Number.isInteger(ele) && currDigit === 1) answer += (ele * 10);
    else if (Number.isInteger(ele) && currDigit === 2) answer += (ele * 9);
    else if (Number.isInteger(ele) && currDigit === 3) answer += (ele * 8);
    else if (Number.isInteger(ele) && currDigit === 4) answer += (ele * 7);
    else if (Number.isInteger(ele) && currDigit === 5) answer += (ele * 6);
    else if (Number.isInteger(ele) && currDigit === 6) answer += (ele * 5);
    else if (Number.isInteger(ele) && currDigit === 7) answer += (ele * 4);
    else if (Number.isInteger(ele) && currDigit === 8) answer += (ele * 3);
    else if (Number.isInteger(ele) && currDigit === 9) answer += (ele * 2);
    else if (Number.isInteger(ele) && currDigit === 10) answer += (ele * 1);
  }

  if (currDigit > 10) return false;

  return answer % 11 === 0;
}
