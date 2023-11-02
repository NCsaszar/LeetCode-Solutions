/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let countMap = {};
    
    // Populate the countMap with the frequency of each number in nums
    for (let num of nums) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }

    // Calculate the number of good pairs using the combination formula
    let goodPairs = 0;
    for (let num in countMap) {
        let count = countMap[num];
        goodPairs += count * (count - 1) / 2;
    }
    
    return goodPairs;
};
