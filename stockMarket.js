// [45, 24, 35, 31, 40, 38, 11] start at 45 and 11 and find biggest.
// split the array into halves and slect the ends and move inwards
// If no profit could have been made, return -1.
let profits = [];

// Divide and Conquer Strategy
const maxProfit = function(array) {
  if (array.length < 2) {
    return array;
  }
  // Splitting the array into two arrys
  let index = Math.floor(array.length / 2);
  let leftArray = array.slice(0, index);
  let rightArray = array.slice(index, array.length);
  // Recursively calling maxProfit and creating a Call Stack
  return comparison(maxProfit(leftArray), maxProfit(rightArray));
};

// The following function will remerge the arrays and also determine if profits can be made.
const comparison = function(leftArray, rightArray) {
  let mergedArrays = [];
  let leftIndex = 0;
  let rightIndex = rightArray.length - 1;
  let smallLeftNumber = 0; // Smallest number on the left array
  let bigRightNumber = 0; // Largest number on the right array
  // We will track from left of the leftArray to the right of the rightArray
  // looking and scanning for the biggest right number and smallest left number
  // In order to maximize profits.
  while (leftIndex < leftArray.length && rightIndex > - 1) {
    // Looking for the smallest left array number
    if (leftIndex === 0 || smallLeftNumber > leftArray[leftIndex]) {
      smallLeftNumber = leftArray[leftIndex];
    }
    // Looking for the biggest right array number
    if (rightIndex === rightArray.length - 1 || bigRightNumber < rightArray[rightIndex]) {
      bigRightNumber = rightArray[rightIndex];
    }
    leftIndex ++;
    rightIndex --;
  }
  // Push the result to the profits array
  if (smallLeftNumber < bigRightNumber) {
    profits.push(bigRightNumber - smallLeftNumber);
  }

  // Return the merged arrays
  return mergedArrays.concat(leftArray).concat(rightArray);
};

const main = function(array) {
  profits = [];
  maxProfit(array);
  if (profits.length === 0) {
    console.log(-1);
  } else {
    let biggestProfit = 0;
    // console.log(profits);
    // Determining the biggest profits
    for (const x of profits) {
      if (x > biggestProfit) {
        biggestProfit = x;
      }
    }
    console.log(biggestProfit);
  }
};

main([45, 24, 35, 31, 40, 38, 11]);
main([45, 30, 20, 15, 0]);
main([45, 24, 35, 31, 40, 38, 11, 17, 80, 99]);