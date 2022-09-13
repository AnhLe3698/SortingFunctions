/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  let resArrayOfArrays = [];
  if (nums.length < 3) {
    return [];
  }
  for (let i = 0; i < nums.length - 2; i++) {

    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let b;
        if (nums[i] + nums[j] + nums[k] === 0) {
          if (resArrayOfArrays.length === 0) {
            resArrayOfArrays.push([nums[i], nums[j], nums[k]]);
          }
          let setLength = resArrayOfArrays.length;
        
          for (let h = 0; h < setLength; h++) {
            let num = resArrayOfArrays[h];
            num = num.join('');
            if (num === '' + nums[i] + nums[j] + nums[k]
              || num === '' + nums[i] + nums[k] + nums[j] ||
              num === '' + nums[j] + nums[i] + nums[k] ||
              num === '' + nums[k] + nums[i] + nums[j] ||
              num === '' + nums[k] + nums[j] + nums[i] ||
              num === '' + nums[j] + nums[k] + nums[i]) {
              b = true;
            } else {
              b = false;
            }
            
           
            if (!b && h === setLength - 1) {
              resArrayOfArrays.push([nums[i], nums[j], nums[k]]);
            } else if (b) {
              h = setLength;
            }
          }

        }
      }
    }
  }
  console.log(resArrayOfArrays.length);
  return resArrayOfArrays;
};

var threeSuma = function(nums) {
  if (nums.length < 3) return nums
  
  nums.sort((a, b) => a - b)
  
  const threeSumSet = new Set()
  const target = 0
  
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
      const first = nums[firstIndex]
      
      if (first > target) break
      
      const numToIndexMap = new Map()

      for (let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++) {
          const second = nums[secondIndex]
          const third = target - (first + second)
          
          if (!numToIndexMap.has(third)) {
              numToIndexMap.set(second, secondIndex)
          } else {
              threeSumSet.add([first, second, third].join())
          }
      }
  }
  console.log([...threeSumSet].map(sum => sum.split(',')).length)
  return [...threeSumSet].map(sum => sum.split(','))
};

console.log([ true, true, true ].indexOf(false));
console.log(threeSum([-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5, 7, 18]));
console.log(threeSuma([-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5, 7, 18]));
console.log(threeSum([-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6]));
console.log(threeSuma([-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6]));