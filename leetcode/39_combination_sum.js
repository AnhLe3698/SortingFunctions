// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
 

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // let us try recursion
  let resultingArray = [];
  let traceObject = {};
  
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
    233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
    353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
    419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
    467, 479, 487, 491, 499, 503, 509, 521, 523, 541
  ];
  
  function pushResults(candidates, target, current, trace) {
    let amount = 0;
    
    
    if(current.length > 0) {
      for(let i = 0; i < current.length; i++) {
        amount += current[i];
        
      }
    }

    //BASE CASE
    if(amount === target[0]) {
      
      if (traceObject[`${trace}`] === undefined) {
        resultingArray.push(current);
        traceObject[`${trace}`] = trace;
      }
      return;
    } else if (amount > target[0]) {
      return;
    }
    
    for(let i = 0; i < candidates.length; i++) {
      let tempArray = [...current];
      tempArray.push(candidates[i])
      pushResults(candidates, target, tempArray, trace * primes[i]);
    }
  }
  
  pushResults(candidates, target, [], 1);
  return resultingArray;
};

console.log(combinationSum([2,3,6,7], [7]));
console.log(combinationSum([2,3,5], [8]));
console.log(combinationSum([2], [1]));


//Better solution
function combinationSum1(candidates, target) {
  const result = [];

  function backtrack(currCombination, currSum, start) {
    if (currSum === target) {
      result.push(currCombination.slice());
      return;
    }
    if (currSum > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      currCombination.push(candidates[i]);
      backtrack(currCombination, currSum + candidates[i], i);
      currCombination.pop();
    }
  }

  backtrack([], 0, 0);
  return result;
}