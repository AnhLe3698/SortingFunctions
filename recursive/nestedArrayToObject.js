// Non - Recursive Version
const deepArrayToObject = function(arr) {
  let finalObject = {};
  for (const arrNest of arr) {
    if (Array.isArray(arrNest[1])) {
      let nestedObject = {};
      for (const nestedArr of arrNest[1]) {
        nestedObject[nestedArr[0]] = nestedArr[1];
      }
      finalObject[arrNest[0]] = nestedObject;
    } else {
      finalObject[arrNest[0]] = arrNest[1];
    }
  }
  return finalObject;

};

// Recursive Version
const deepArrayToObjectRec = function(arr) {
  let arrObject = {};
  for (const arrNest of arr) {
    if (Array.isArray(arrNest[1])) {
      arrObject[arrNest[0]] = deepArrayToObjectRec(arrNest[1]);
    } else {
      arrObject[arrNest[0]] = arrNest[1];
    }
  }
  return arrObject;
};


console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]));
//expected output => {a:1, b: 2, c: {d: 4}}}

console.log(deepArrayToObjectRec([['a', 1], ['b', 2], ['c', [['d', 4]]]]));