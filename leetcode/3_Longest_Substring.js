// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let maxSubStringLength = 0;
    for(let i = 0; i < s.length; i++) {
      let obj = {};
      for(let j = i; j < s.length; j++) {
        if(!obj[s[j]]) {
          obj[s[j]] = s[j];
        } else {
          j = s.length;
          let len = Object.keys(obj).length;
          if(len > maxSubStringLength) {
            maxSubStringLength = len;
          }
        }
      }
    }
  return maxSubStringLength;
};

console.log(lengthOfLongestSubstring('sabcdss'));