/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if(n * k === 0) return [];
    if(k===1) return nums;
    
    let left = [nums[0]];
    let right = [];
    right[n-1] = nums[n-1];
    
    for(let i=1; i<n; i++) {
        //from left to right
        if(i%k === 0) left[i] = nums[i];
        else left[i] = Math.max(left[i-1], nums[i]);
        
        //from right to left
        const j = n -i-1;
        if((j+1)%k === 0) right[j] = nums[j];
        else right[j] = Math.max(right[j+1], nums[j]);
    }
    
    let output = [];
    
    for(let i=0; i<n-k+1; i++) {
        output[i] = Math.max(left[i+k-1], right[i]);
    }
    
    return output;
};