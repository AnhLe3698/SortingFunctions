/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // n x n matrix
    
    // compute center of mass
    const centerOfMass = (matrix.length + 1) / 2 - 1;
    
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) newMatrix.push(Array(matrix.length ).fill(0));

    for(let j = 0; j < matrix.length; j++) {
      for(let i = 0; i < matrix.length; i++) {
        // compute the differences and indexes
        offsetInX = i - centerOfMass;
        offsetInY = centerOfMass - j;
        rotatedX = offsetInY;
        rotatedY = 0 - offsetInX;
        realx = rotatedX + centerOfMass;
        realy = centerOfMass - rotatedY;
        // console.log(i,',',j, ' ', realx,',', realy, ' ', matrix[j][i])
        newMatrix[realy][realx] = matrix[j][i];
      }
    }
    return newMatrix;
    // swap the differences in the x and y  direction

  
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]