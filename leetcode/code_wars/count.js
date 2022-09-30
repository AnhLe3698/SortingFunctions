/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

 */
function count(str) {
  if (!str) return {}
  let obj = {}
  for (let val of str) {
   obj[val] = (obj[val] || 0) + 1
  }
  return obj;
 }
 
 
 console.log(count("aba")); // {a: 2, b: 1}
 console.log(count("")); // {}