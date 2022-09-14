// Given a non-empty array of integers nums, every
// element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime
// complexity and use only constant extra space.


const singleNumber = function(nums) {
  let hash = {};
  for (const items of nums) {
    if (hash[items]) {
      hash[items]++;
    } else {
      hash[items] = 1;
    }
  }
  for (const items in hash) {
    if (hash[items] === 1) {
      return items;
    }
  }
};