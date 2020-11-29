/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let count = 0;
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for(let i=0; i<n-2; i++) {
        let left = i+1, right=n-1;
        while(left<right) {
            if(nums[i] + nums[left] + nums[right] < target) {
                count += right-left;
                left++;
            } else {
                right--;
            }
        }
    }
    
    return count;
};
