function matrixGenerator(rows, columns) {
  const matrix = [];

  for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
      matrix[y][x] = Math.round(Math.random() * 100);
    }
  }

  matrix.forEach(row => row.sort((a, b) => a - b));

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      if (matrix[i][0] < matrix[j][0]) {
        const temp = matrix.splice(i, 1);
        matrix.splice(j, 0, temp[0]);
      }
    }
  }
  return matrix;
}

module.exports = matrixGenerator;
