/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let currentNum = nums[mid];
    if (currentNum === target) {
      return mid;
    } else if (currentNum < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
