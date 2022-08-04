// This is a very inefficient sorting algorithim that uses
// two nested looping functions
// The runtime's is N(N+1)/2 or O(N^2)
const spliceSort = function(arr) {
  let smallNumber;
  let index = 0;
  // Sorted from least to greatest
  let sortedArray = [];
  if (arr.length === 0) {
    return [];
  }
  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        smallNumber = arr[i];
        index = 0;
      } else if (arr[i] < smallNumber) {
        smallNumber = arr[i];
        index = i;
      }
    }
    sortedArray.push(arr.splice(index, 1)[0]);
    smallNumber = null;
    index = 0;
  }
  return sortedArray;
};

const reverseArray = function(arr) {
  let size = arr.length - 1;
  let resultingArray = [...arr];
  for (let i = 0; i < arr.length; i++) {
    resultingArray[size - i] = arr[i];
  }
  return resultingArray;
};

const reverseString = function(string) {
  return reverseArray(string.split('')).join('');
};

const reverseStringProto = function(string) {
  let resultingString = "";
  for (let i = string.length - 1; i > - 1; i--) {
    resultingString += string[i];
  }
  return resultingString;
};


console.log(spliceSort([6,7,8,2,3,5,1]));
console.log(reverseArray(spliceSort([6,7,8,2,3,5,1])));
console.log(reverseString('tree'));
console.log(reverseStringProto('tree'));
console.log(spliceSort([]));
console.log(reverseArray(spliceSort([])));