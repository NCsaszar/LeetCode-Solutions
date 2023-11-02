/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let output = 0;

  for (let op of operations) {
    if (op.includes('--')) {
      output--;
    }else{
    output++;
    }
  }
  return output;
};
