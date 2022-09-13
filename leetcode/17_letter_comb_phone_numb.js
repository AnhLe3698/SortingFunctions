//  Given a string containing digits from 2-9 inclusive, return all possible letter
//  combinations that the number could represent.
//  Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Input: digits = ""
// Output: []

// Input: digits = "2"
// Output: ["a","b","c"]

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// 2 abc
// 3 def
// 4 ghi
// 5 jkl
// 6 mno
// 7 pqrs
// 8 tuv
// 9 wxyz

const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  let resultingArr = [];
  let carrierArr = digits = digits.split('');
  const lastDigit = carrierArr.pop();

  switch (lastDigit) {
    case '2':
      resultingArr = ['a', 'b', 'c'];
      break;
    case '3':
      resultingArr = ['d', 'e', 'f'];
      break;
    case '4':
      resultingArr = ['g', 'h', 'i'];
      break;
    case '5':
      resultingArr = ['j', 'k', 'l'];
      break;
    case '6':
      resultingArr = ['m', 'n', 'o'];
      break;
    case '7':
      resultingArr = ['p', 'q', 'r', 's'];
      break;
    case '8':
      resultingArr = ['t', 'u', 'v'];
      break;
    case '9':
      resultingArr = ['w','x', 'y', 'z'];
      break;
  }

  // base case
  if(carrierArr.length === 0) {
    return resultingArr;
  }

  // final result array
  let sumArray = [];
  for(const ele of resultingArr) {
    for(const ele2 of letterCombinations(carrierArr.join(''))) {
      sumArray.push(ele2 + ele);
    }
  }

  return sumArray;
};

console.log(letterCombinations("23"));