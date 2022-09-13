const perms = function(nums) {
  let result = [];
  const perm = function(i,nums) {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      perm(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  perm(0,nums);
  return result;
};

console.log(perms([1,2,3]));