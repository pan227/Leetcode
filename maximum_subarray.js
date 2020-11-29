/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let presum=[];
    let ans = Number.NEGATIVE_INFINITY;
    let min = 0;

    for(let i=0; i<nums.length; i++) {
        if(i === 0) presum[i] = nums[0];
        else presum[i] = presum[i-1] + nums[i];
 
        ans = Math.max(ans, presum[i] - min);
        min = Math.min(min, presum[i]);
        
    }
    return ans;
};