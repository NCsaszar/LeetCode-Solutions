/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let currentRow = [1];
    for (let j = 1; j < i; j++) {
      currentRow.push(result[i - 1][j] + result[i - 1][j - 1]);
    }
    currentRow.push(1);
    result.push(currentRow);
  }
  return result;
};
