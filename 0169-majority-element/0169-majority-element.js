/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let count = 0
   let canidate = 0
   
   for(let num of nums){
     if(count === 0){
       canidate = num
     }
     count += (num === canidate) ? 1 : -1
   }
  return canidate
};