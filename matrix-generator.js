function matrixGenerator(rows, columns) {
  const matrix = [];

  for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
      matrix[y][x] = Math.round(Math.random() * 100);
    }
  }

  matrix.forEach(row => row.sort((a, b) => a - b));

  matrix.sort((a, b) => a[0] - b[0]);
  return matrix;
}

module.exports = matrixGenerator;
