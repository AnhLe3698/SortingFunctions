// const plusOne = function(digits) {
  
//   const len = digits.length - 1;
//   let counter  = len;
// // if it's not a 9 find the last digit
//   if (digits[len] !== 9) {
//     digits[len] ++;
//   } else {


  
//     // last dig = 9 counter = 4
//     // last dig = 0
//     // counter = 3
//     // 2nd last dig = 9 counter = 3
//     // 2nd last dig = 0
//     // counter = 2
//     // 3rd dig = 9 counter = 2
//     // 2nd last dig = 0
//     // counter = 1
//     // 3rd dig = 9 counter = 1
//     // 2nd last dig = 0
//     // counter = 0
//     // 3rd dig = 9 counter = 0
//     // 2nd last dig = 0
//     // counter = -1
//     while (counter  > -1 && digits[counter] === 9) {
//       digits[counter] = 0;
//       counter --;
      
//       if (counter < 0) {
//         digits.unshift(1);
//       }
//     }
//     if (digits[counter] !== 9 && counter !== -1) {
//       digits[counter] ++;
//     }
    
//   }
//   return digits;
// // plus one to it 
// // if the digit is 9 
// // make last digit 0 add one to the digit infront of it 

// };

// var plusOne = function (digits) {
//   const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
//   return arr.map(Number);
// };


var plusOne = function(digits) {
  let response = [];
  const areAllNine = digits.every(n => n === 9);
  if(areAllNine) {
      const allZero = Array(digits.length).fill(0);
      response = [1, ...allZero];
      return response;
  }
  response = [...digits];
  let extraVal = 1;
  for(let i=digits.length-1; i >= 0; i--) {
      const sum = digits[i] + extraVal;
      if(sum === 10) {
          response[i] = 0;
          extraVal = 1;
      } else {
          extraVal = 0;
          response[i] = sum;
      }
  }
  return response;    
};


// let plusOne = function(digits) {
//   for(let i=digits.length-1;i>=0;i--){
//       digits[i]++;
//       if(digits[i]>9){
//           digits[i]=0;
//       }
//       else{
//           return digits;
//       }
//   }
//   digits.unshift(1);
//   return digits;
// };

// // BigInt turns string to


// const digits = [8,9,9,9];
// console.log(plusOne(digits));


// var plusOne = function (digits) {
//   let number = BigInt(digits.join(""));
//   number++;
//   return number.toString().split("");
// };


// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
// ours [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]