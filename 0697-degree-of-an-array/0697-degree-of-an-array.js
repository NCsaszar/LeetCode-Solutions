/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let degree = 0;
  let subArrays = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (subArrays[currentNum] === undefined) {
      subArrays[currentNum] = { count: 0, first: i, last: i };
    }
    subArrays[currentNum].count++;
    subArrays[currentNum].last = i;

    degree = Math.max(degree, subArrays[currentNum].count);
  }

  let minSub = Infinity;

  for (let sub in subArrays) {
    if (subArrays[sub].count === degree) {
      minSub = Math.min(minSub, subArrays[sub].last - subArrays[sub].first +1);
    }
  }
  return minSub;
};
