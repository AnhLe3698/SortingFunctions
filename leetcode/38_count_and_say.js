// Count Total of each number occurance
// Original problem was poorly defined
// Ended up solving a different problem
const countAndSay = function(n) {
  const count = function(n) {
  
    let hash1 = {};
    let hash2 = {};
    if (n === 1) {
      return 1;
    }
  
    if (typeof count(n - 1) === "number") {
      hash1[1] = 1;
      return hash1;
    } else {
      hash1 = count(n - 1);
      for (const key of Object.keys(hash1)) {
        if (hash2[key]) {
          hash2[key] ++;
        } else {
          hash2[key] = 1;
        }
      }
      for (const key of Object.values(hash1)) {
        if (hash2[key]) {
          hash2[key] ++;
        } else {
          hash2[key] = 1;
        }
      }
      return hash2;
    }
  };
  const finalHash = count(n);
  if (typeof finalHash === "number") {
    return '1';
  }
  let str = '';
  
  for (const key of Object.keys(finalHash)) {
    str =  finalHash[key] + key + str;
  }
  return str;
};

// var countAndSay = function(n) {
   
//   let curr = "1";
  
//   for (let i = 1; i < n; ++i) {
//       let temp = "";
      
//       let cursor = 0;
//       let lastChar = curr[0];
//       let count = 0;
      
//       while (cursor < curr.length) {
//           if (lastChar !== curr[cursor]) {
//               temp += count + lastChar;
//               lastChar = curr[cursor];
//               count = 0;
//           }
//           cursor += 1;
//           count += 1;
//       }
      
//       temp += count + lastChar;
//       curr = temp;
//   }
  
//   return curr;
  
// };

console.log(countAndSay(5));