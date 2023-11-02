/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    return [].concat(...nums.slice(0, n).map((val, idx) => [val, nums[idx + n]]));
};
