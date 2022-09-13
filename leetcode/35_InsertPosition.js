////////////////////////////////////
///////// O(n) RUNTIME!!///////////
///////////////////////////////////
const searchInsert = function(nums, target) {

  let max = Math.floor(nums.length / 2);
  let repetition = 0;

  while (max >= 0 && max < nums.length) {
    if (nums[max] === target) {
      return max;
    } else if (nums[max] > target) {
      max --;
      if (repetition > 0) {
        max ++;
        return max;
      } else {
        repetition = -1;
      }
      
    } else if (nums[max] < target) {
      max ++;
      if (repetition < 0) {
        return max;
      } else {
        repetition = +1;
      }
    }
    
  }
  return (nums[nums.length - 1] < target) ? nums.length : 0;
};
let searcha = -8;
console.log(searchInsert([1, 3, 5, 7, 9, 11, 12, 13], searcha));


////////////////////////////////////
///////// O(log(n)) RUNTIME!!//////
///////////////////////////////////
const searchInserta = function(nums, target) {

  let index = 0;
  let maxIndex = nums.length;

  while (index !== maxIndex) {
    if (nums[index] === target || nums[maxIndex] === target) {
      return index;
    } else if (nums[index] > target) {
      maxIndex = index;
      index = Math.floor((index) / 2);
    } else if (nums[index] < target) {
      index = Math.ceil((index + maxIndex) / 2);
    } else {
      return index;
    }
  }
  console.log(index, maxIndex, nums.length);
  
  if (index === nums.length && nums[index - 1] < target) {
    return nums.length;
  } else if (index === 0 && nums[index - 1] > target) {
    return 0;
  } else {
    return index;
  }

};



console.log(searchInserta([1, 3, 5, 7, 9, 11, 12, 13], searcha));
