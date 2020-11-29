/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var backtrack = function(res, cur, nums, start) {
    res.push([...cur]);
    
    for(let i = start; i<nums.length; i++) {
        cur.push(nums[i]);
        backtrack(res, cur, nums, i+1);
        cur.pop();
    }
}

var subsets = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    backtrack(res, [], nums, 0);
    return res;
};