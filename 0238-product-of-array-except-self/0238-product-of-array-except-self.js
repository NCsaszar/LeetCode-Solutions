/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;

  let output = new Array(n).fill(1);

  let left = 1;
  for (let i = 1; i < n; i++) {
    left = left * nums[i - 1];
    output[i] = left;
  }

  let right = 1;
  for (let i = n - 2; i >= 0; i--) {
    right = right * nums[i + 1];
    output[i] *= right;
  }
  return output;
};
