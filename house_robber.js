/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevNo = 0;   // max monney can get if rob current house
    let prevYes = 0;  // max money can get if not rob current house
    
    for(let i=0; i<nums.length; i++) {
        // If we rob current cell, previous cell shouldn't be robbed. So, add the current value to previous one.
        let currYes = prevNo + nums[i];
         // If we don't rob current cell, then the count should be max of the previous cell robbed and not robbed
        let currNo = Math.max(prevNo, prevYes);
        // Update values for the next round
        prevNo = currNo;
        prevYes = currYes;
    }
    
    return Math.max(prevNo, prevYes);
};