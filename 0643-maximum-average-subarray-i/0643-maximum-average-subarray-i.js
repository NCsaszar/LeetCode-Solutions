/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let sum = 0;

    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum average
    return maxSum / k;
}


