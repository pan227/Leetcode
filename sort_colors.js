/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    for(let i=0; i<nums.length; i++) {
        let temp;
        while (nums[i]==2 && i<end) {
            temp = nums[i];
            nums[i] = nums[end];
            nums[end] = temp;
            end--;
        } 
        while (nums[i]==0 && i>start) {
            temp = nums[i];
            nums[i] = nums[start];
            nums[start] = temp;
            start++;
        } 
    }
};