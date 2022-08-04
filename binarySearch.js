//[ 1, 2, 3, 5, 6, 7, 8] , target 7
// leftIndex = 0;
// rightIndex = arr.length;
// while (left + 1 < right)
// mid = Math.ceil(right + left / 2) = 4
// if arr[mid] < target
// left = mid => [6, 7, 8]
// new loop
// left = 4, right = 7
// mid = ceil((4+7)/2) = 6
// if arr[mid] == target
// return mid

//[ 1, 2, 3, 5, 6, 7, 8] , target 1
// leftIndex = 0;
// rightIndex = arr.length;
// while (left + 1 < right)
// mid = Math.ceil(right + left / 2) = 4
// if arr[mid] > target
// right = mid => [1,2, 3,5]
// new loop
// left = 0, right = 4
// mid = ceil((0+4)/2) = 2
// if arr[mid] > target, 3 > 1
// right = mid = 2 => [1,2,3]
// new loop
// left = 0  right = 2
// mid = 1
// arr[1] > 1
// left = 0 right = 1;
// There is only one element left so we must return it
// and the loop exits

// We need this to sort our array
const sortingFunction = require('./mergeSort');

// This function works on a sorted array
const binarySearch = function(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length;
  while (leftIndex + 1 < rightIndex) {
    let mid = Math.ceil((leftIndex  + rightIndex) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      leftIndex = mid;
    } else {
      rightIndex = mid;
    }
  }
  // This resolves the issue where if the target
  // is the left most number, it will cause the main logical
  // block to not return a value. Since mid stops at index 1
  if (arr[0] === target) {
    return 0;
  }

  return - 1;
};

console.log(binarySearch(sortingFunction([6,7,8,2,3,5,1]), 5));