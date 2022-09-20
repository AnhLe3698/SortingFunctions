// You are given a string number representing a positive integer and a character digit.
// Return the resulting string after removing exactly one occurrence of digit from 
// number such that the value of the 
// resulting string in decimal form is maximized. The test cases are
//generated such that digit occurs at least once in number.

const removeDigit = function(number, digit) {
//slowest test every case and compare which one is the biggest
//go from front ot back check if number is greater or equal to the number then number after it keep going 
// if it's smaller then the number after it remove it
  let index = -1;
  let arr = number.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === digit) {
      index = i;
      if (arr[i]  < arr[i + 1]) {
        arr.splice(i, 1);
        return arr.join('');
      }
      
    }
    
  }
  arr.splice(index,1);
  //console.log('hello there');
  return arr.join('');

};

// 12131
  // for(n) {
  //   checking
  //   push array
  // }
  // scan array {

  // }
  

// 1131, 1231, 1213
// 55255257
// 552552557

// 527527527
// 57558,57558, 55758, 55758
// 91222221222
// 111111211111
// 19891
// 80191
// 
console.log(removeDigit("12311111113", "3"));
console.log(removeDigit("1231", "1"));