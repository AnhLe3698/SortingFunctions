const strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let counter = 0;
    let notMatched = true;
    while (counter < needle.length && notMatched) {
      counter++;
      if (haystack[i + counter - 1] !== needle[counter - 1]) {
        notMatched = false;
      } else if (counter === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr('hello', 'll')); // ==> expected output 2