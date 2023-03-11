/**
 * @param {number} n
 * @return {boolean}
 */

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.
var isUgly = function(n) {
    if (n === 0) return false;
    let recursion = function(n, prime) {
      if(n / prime - Math.floor(n / prime) !== 0) {
        return n;
      }
      return recursion(n / prime, prime)
    }

    return recursion(recursion(recursion(n, 5), 3), 2) === 1 ? true : false;
};

console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(3));
console.log(isUgly(4));
console.log(isUgly(5));
console.log(isUgly(7));
console.log(isUgly(10));
console.log(isUgly(14));