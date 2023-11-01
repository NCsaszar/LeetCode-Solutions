/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroPt = 0;

  for (let currentPos = 0; currentPos < nums.length; currentPos++) {
    if (nums[currentPos] !== 0) {
      [nums[currentPos], nums[nonZeroPt]] = [nums[nonZeroPt], nums[currentPos]];
      nonZeroPt++;
    }
  }
};
