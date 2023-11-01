/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [left, right, maxArea] = [0, height.length - 1, 0];

  while (left < right) {
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
};
