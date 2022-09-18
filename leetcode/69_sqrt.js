const mySqrt = function(x) {
  let counter = 0;
  while (counter * counter < x) {
    counter++;
  }
  if (counter * counter === x) {
    return counter;
  } else {
    return counter - 1;
  }
};

console.log(mySqrt(1));

console.log(mySqrt(5));

console.log(mySqrt(10));