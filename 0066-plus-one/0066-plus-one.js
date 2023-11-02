/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;
    
    // Starting from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;
        
        // If the current digit is 10 after incrementing, set it to 0
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            // No carry to handle, we can return the result
            return digits;
        }
    }
    
    // If we're here, there was a carry from the most significant digit
    // Add a new most significant digit with value 1
    digits.unshift(1);
    
    return digits;
};
