let matrix = [[1,2,3],[4,5,6],[7,8,9]]
const transpose = function (matrix) {
    let x = []
    for (let i = 0; i < matrix[0].length; i++) {
      let y = []
      for (let j = 0; j < matrix.length; j++) {
        y.push(matrix[j][i]);
      }
      x.push(y);
    }
    return x;
  };
  console.log(transpose(matrix));