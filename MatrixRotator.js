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
  // do work here
  var newMatrix = [];
  var matrixLen = this.matrix.length;

  if (direction === Direction.CW) {
  	for (var i = 0; i < matrixLen; i++) {
  		newMatrix[i] = [];
  		for (var j = 0; j < matrixLen; j++) {
  			newMatrix[i][j] = this.matrix[matrixLen - 1 - j][i];
  		}
  	}
  } 

  if (direction === Direction.CCW) {
  	for (var k = 0; k < matrixLen; k++) {
  		newMatrix[k] = [];
  		for (var l = 0; l < matrixLen; l++) {
  			newMatrix[k][l] = this.matrix[l][matrixLen - 1 - k];
  		}
  	}
  }

  this.matrix = newMatrix;
  // must be a valid Direction, see Direction.js


};