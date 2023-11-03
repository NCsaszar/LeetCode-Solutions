/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce((maxWealth, account) => {
    let customerSum = account.reduce((sum, wealth) => sum + wealth, 0);
    return Math.max(customerSum, maxWealth);
  }, 0);
};
