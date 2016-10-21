/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  let newMatrix = [];
  const matrixLen = this.matrix.length;

  if (direction === Direction.CW) {
    for (let i = 0; i < matrixLen; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < matrixLen; j++) {
        newMatrix[i][j] = this.matrix[matrixLen - 1 - j][i];
      }
    }
  }

  if (direction === Direction.CCW) {
    for (let i = 0; i < matrixLen; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < matrixLen; j++) {
        newMatrix[i][j] = this.matrix[j][matrixLen - 1 - i];
      }
    }
  }
  this.matrix = newMatrix;
};