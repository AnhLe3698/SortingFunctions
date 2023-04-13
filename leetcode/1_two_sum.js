/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
};

// Refactor twoSum to use a hash table
var twoSum = function(nums, target) {
    const hashTable = {};
    for (let i=0; i<nums.length; i++) {
      const complement = target - nums[i];
      if (hashTable[complement] !== undefined) {
        return [hashTable[complement], i];
      }
      hashTable[nums[i]] = i;
    }
}