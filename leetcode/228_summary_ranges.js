// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

const summaryRanges = function(nums) {
  let data = [];

  if (nums.length === 0) {return []};

  let carrierValue = [undefined, undefined];
  carrierValue[0] = nums[0];
  carrierValue[1] = nums[1];
  data[carrierValue[0]] = [carrierValue];
  for (const items of nums) {
    if (items !== carrierValue[1] + 1) {
      data[items] = [items];
      carrierValue[0] = items;
      carrierValue[1] = items;
    } else {
      carrierValue[1] = items;
      data[carrierValue[0]].push(items);
    }
  }
  let allRanges = [];

  for (const ranges in data) {
    if (data[ranges].length === 1) {
      allRanges.push(data[ranges][0] + '');
    } else {
      allRanges.push(`${data[ranges][0]}->${data[ranges][data[ranges].length - 1]}`);
    }
  }
  return allRanges;

};

console.log(summaryRanges([0,1,2,4,5,7, 8, 9]));
console.log(![]);