// Write a function that takes an array of integers as input and returns a new array that contains the same integers but in non-descending order (i.e., sorted in ascending order). You may not use any built-in sorting functions or methods.

// For example, if the input array is [3, 7, 1, 9, 4, 2], the output array should be [1, 2, 3, 4, 7, 9].

// You can implement any sorting algorithm of your choice, such as bubble sort, insertion sort, selection sort, merge sort, or quicksort.

function bubbleSort(array) {
  // Write your code here.
  // bubble sort
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

function insertionSort(array) {
  // Write your code here.
  
  for(let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    // starts at index and moves left if temp is smaller
    while(j >= 0 && temp < array[j]) {
      // moving the current value to the right
      array[j + 1] = array[j];
      j--;
    }
    // This sets the value to temp after looping through the array from j = i - 1 down to some value for j
    array[j + 1] = temp;
  }

  return array;
};

function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    // An inital index
    let minIndex = i;
    let min = array[i];
    // go through the array and look for the minimum
    for (let j = i + 1; j < n; j++) {
      if (min > array[j]) {
        let temp = min;
        min = array[j];
        array[j] = temp;
      }
    }
    
    array[minIndex] = min;
    
  }
  return array;

}

function mergeSort(array) {
  // Divide the function in half and recursively call mergeSort(arrLeft), mergeSort(arrRight)
  // Base case when arr.length == 1
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2)
  // .slice(index, end Index + 1)
  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid, array.length);
  console.log(leftArr);
  console.log(rightArr);
  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
 // we merge the two arrays into one
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  while(leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex ++;
  }
  while(rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex ++;
  }
  return result;
}
// Input: [3, 7, 1, 9, 4, 2]
// Output: [1, 2, 3, 4, 7, 9]

console.log(bubbleSort([3, 7, 1, 9, 4, 2]));
console.log(insertionSort([3, 7, 1, 9, 4, 2]));
console.log(selectionSort([3, 7, 1, 9, 4, 2]));

console.log(mergeSort([3, 7, 1, 9, 4, 2]));

console.log(merge([2,5], [1, 3]));