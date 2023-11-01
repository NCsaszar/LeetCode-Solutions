/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;
  for (let i = 0; i + k <= nums.length; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum += nums[j];
    }
    maxAverage = Math.max(maxAverage, sum / k);
  }
  return maxAverage;
};

