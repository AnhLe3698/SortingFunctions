const lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));