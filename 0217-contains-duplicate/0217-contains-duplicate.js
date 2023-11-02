/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dupes = new Set();
  for (let x of nums) {
    if (dupes.has(x)) {
      return true;
    }
    dupes.add(x)
  }
  return false;
};
