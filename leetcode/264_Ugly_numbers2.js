/**
 * @param {number} n
 * @return {number}
 */

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

// var nthUglyNumber = function(n) {

//   const memo = [];
//   const memo2 = [];
  
//   var isUgly = function(a) {
      
//       if (a === 0) return false;
      
//       let loop = function(a, prime) {
//         let j = a;
//         while(j >= 1) {
//           //exit clauses
//           if(j===1) return 1;
//           if (j < 60000000) {
//             if (memo[j] !== undefined) {
//               return memo[j] ? 1 : 7;
//             } 
//             if( j / prime - Math.floor(j / prime) !== 0) {
//               return j;
//             } else if (memo[j / prime] !== undefined) {
//               return memo[j / prime] ? 1 : 7;
//             }
//           } else {
//             if (memo2[j - 60000000] !== undefined) {
//               return memo2[j-60000000] ? 1 : 7;
//             }
//             if( j / prime - Math.floor(j / prime) !== 0) {
//               return j;
//             }
//           }
//           j = j/prime;
//         }
        
//       }

//       if (loop(loop(loop(a, 5), 3), 2) === 1) {
//         return true;
//       } else {
//         return false;
//       }
//   };

//   let uglyList = [];
//   let currentNumber = 1;
//   while(uglyList.length < n) {
//     // Weeding out the 'primes'
//     if (currentNumber !== 1 && currentNumber % 2 !== 0 && currentNumber % 3 !== 0 && currentNumber % 5 !== 0) {
//       if (currentNumber < 60000000) {
//         memo[currentNumber] = false; // non-ugly 'primes'
//       } else {
//         memo2[currentNumber - 60000000] = false;
//       }
      
//     } else {
//       if( isUgly(currentNumber)) {
//         uglyList.push(currentNumber);
//         if (currentNumber < 60000000) {
//           memo[currentNumber] = true; // non-ugly 'primes'
//         } else {
//           memo2[currentNumber - 60000000] = true;
//         }
//       } else {
//         if (currentNumber < 60000000) {
//           memo[currentNumber] = false; // non-ugly 'primes'
//         } else {
//           memo2[currentNumber - 60000000] = false;
//         }
//       }
//     }
    
//     currentNumber++;
//   }
//   // console.log(memo, memo[13]);
//   return uglyList[n - 1];
// };
var nthUglyNumber = function(n) {
  const memo = new Array(n);
  memo[0] = 1;
  let i2 = 0, i3 = 0, i5 = 0;
  
  for (let i = 1; i < n; i++) {
    const nextUglyNumber = Math.min(memo[i2] * 2, memo[i3] * 3, memo[i5] * 5);
    memo[i] = nextUglyNumber;
    
    if (nextUglyNumber === memo[i2] * 2) i2++;
    if (nextUglyNumber === memo[i3] * 3) i3++;
    if (nextUglyNumber === memo[i5] * 5) i5++;
  }
  
  return memo[n-1];
};
console.log(nthUglyNumber(1000))
// 100 => 1536
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12,
// 15, 16, 18, 20, 24, 25, 27 30] is the sequence of the first 10 ugly numbers.