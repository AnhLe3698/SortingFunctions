// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.


const isPowerOfTwo = function(n) {
  let a = Math.log2(n);
  return (a % 1 === 0);
};

console.log(isPowerOfTwo(3));