/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
    let hashmap = {};
    let operations = 0;

    // Count occurrences of each number
    for (let num of nums) {
        hashmap[num] = (hashmap[num] || 0) + 1;
    }

    for (let num of nums) {
        if (hashmap[num] > 0 && hashmap[k - num] > 0) {
            if (num === k - num && hashmap[num] < 2) {
                // If it's the same number and there aren't at least 
                // two occurrences, skip this iteration.
                continue;
            }
            operations++;
            
            // Decrement the count for the number and its complement
            hashmap[num]--;
            if (hashmap[num] === 0) delete hashmap[num];
            
            hashmap[k - num]--;
            if (hashmap[k - num] === 0) delete hashmap[k - num];
        }
    }

    return operations;
}
