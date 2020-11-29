/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var backtracking = function(nums, res, comb, used, dep) {
    if(dep === nums.length) {
        res.push([...comb]);
        return;
    } 
    for(let i=0; i<nums.length; i++) {
        if(used[i]) {
            continue;
        }
        used[i] = true;
        backtracking(nums, res, [...comb, nums[i]], used, dep + 1);
        used[i] = false;
        
    }
}

var permute = function(nums) {
    let res = [];
    let comb = [];
    let used = [];
    
    backtracking(nums, res, comb, used, 0);
    return res;
};