/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const result = []

  const backtracking = (curr, remaining, target) => {
      if (target < remaining[0] || !remaining.length) return

      for (let i = 0; i < remaining.length; i++) {
          if (i > 0 && remaining[i-1] === remaining[i]) {
              continue
          }
          const number = remaining[i]
          if (number > target) return

          const newCurr = [...curr]
          newCurr.push(number)

          if (target - number === 0) {
              return result.push(newCurr)
          }

          backtracking(newCurr, remaining.slice(i+1), target - number)
      }
  }

  backtracking([], candidates, target)

  return result
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))


// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

const combinationSum22 = function(candidates, target) {
  const result = [];
    const hashTable = {};
    candidates.sort((a,b) => a - b);

    const sortRecursion = function(candidates, target, currentArray) {
      // base case
      if (currentArray.length !== 0 ) {
        let total = 0;
        let hashString = '';
        for (const elements of currentArray) {
          total += elements;
          hashString += elements;
          if (total > target) {
            return;
          }
        }
        // Checks if it equals the total and if the hashString was previously recorded 
        if (total === target && !hashTable[hashString]) {
          result.push(currentArray);
          // Sets the string into the hastable
          hashTable[hashString] = true;
          return;
        }
      }

      for(let i = 0; i < candidates.length; i++) {
        sortRecursion(candidates.slice(i + 1), target, [...currentArray, candidates[i]])
      }
    }
    sortRecursion(candidates, target, []);
    return result;
}