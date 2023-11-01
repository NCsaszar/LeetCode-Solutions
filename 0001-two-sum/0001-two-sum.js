/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //Input: nums = [3,2,4], target = 6
  // Output: [1, 2];
  let numCompliments = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numCompliments[complement] !== undefined) {
      return [numCompliments[complement], i];
    }
    numCompliments[nums[i]] = i;
  }
};
