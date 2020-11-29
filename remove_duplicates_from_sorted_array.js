/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    
    if(n<2) return n;
    let id = 1;
    for(let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]) nums[id++] = nums[i];
    }
    
    return id;
};