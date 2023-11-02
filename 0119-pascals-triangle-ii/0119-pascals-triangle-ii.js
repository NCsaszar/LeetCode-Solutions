/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    let currentRow = [1];
    let prevRow = result[i - 1];
    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    currentRow.push(1);
    result.push(currentRow);
  }
  return result[rowIndex];
};
