// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

const removeDuplicates = function(nums) {
  let holdingVal = [];

  let minIndex = 1;
  let maxIndex = nums.length;

 

  holdingVal.push(nums[0]);

  for (let i = minIndex; i < maxIndex; i++) {
    if (nums[i - 1] !== nums[i]) {
      holdingVal.push(nums[i]);
    }
  }

  return (holdingVal[0] === undefined ? [] : holdingVal);

};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,6]));
console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([]));

