// Splits the function recursively into smaller chunks
const mergeSort = function(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const index = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, index);
  let rightArray = arr.slice(index, arr.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// Merges each array and sorts out the elements
const merge = function(leftArray, rightArray) {
  let mergedArrays = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] > rightArray[rightIndex]) {
      mergedArrays.push(rightArray[rightIndex]);
      rightIndex ++;
    } else if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArrays.push(leftArray[leftIndex]);
      leftIndex ++;
    }
  }
  
  return mergedArrays.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
};

/*
console.log(mergeSort([0, 13, 26, 5, 8, 17]));
*/

module.exports = mergeSort;
