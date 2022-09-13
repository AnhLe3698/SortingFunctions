/**
 * we could use a object tree and recursion to solve
 */


// Brute force method, need to revisit.
const generateParenthesis = function(n) {

  let finalArr = [];

  for (let j = 0; j < 800000; j++) {
    let count_open = 0;
    let count_closed = 0;
    let arr = '';
    for (let i = 0; i < 2 * n; i++) {
      if (Math.floor(Math.random() * 2) === 0) {
        arr += '(';
        count_open ++;
      } else {
        arr += ')';
        count_closed ++;
      }
      if (count_closed > count_open) {
        break;
      }
    }
    if (count_open === n && count_closed === n && arr.length === 2 * n) {
      
      for (let i = 0; i < finalArr.length; i++) {
        if (finalArr[i] !== arr && i === finalArr.length - 1) {
          finalArr.push(arr);
        } else if (finalArr[i] === arr) {
          break;
        }
      }

      if (finalArr.length === 0) {
        finalArr.push(arr);
      }
    }

  }
  

  return finalArr;


};

console.log(generateParenthesis(8).length);


console.log(["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()",
"((()(())))","((()()()))","((()())())","((()()))()","((())(()))",
"((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))",
"(()(())())","(()(()))()","(()()(()))","(()()()())","(()()())()","(()())(())",
"(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()",
"()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())",
"()(()())()","()(())(())","()(())()()",
"()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"].length);