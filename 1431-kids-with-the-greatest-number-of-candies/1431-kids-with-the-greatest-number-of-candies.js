/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let greatest = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= greatest);
  }
  return result;
};
