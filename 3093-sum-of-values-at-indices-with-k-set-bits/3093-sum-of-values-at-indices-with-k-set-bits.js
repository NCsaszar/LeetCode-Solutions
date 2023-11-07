/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
      let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (countSetBits(i) === k) {
      sum += nums[i];
    }
  }
  return sum;
};
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    num &= (num - 1); // Flip the least significant set bit
    count++;
  }
  return count;
}