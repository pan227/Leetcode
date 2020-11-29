/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var dfs = function(res, cur, used, nums) {
    if(cur.length === nums.length) {
        res.push([...cur]);
        return;
    }
    
    for(let i=0; i<nums.length; i++) {
        if(used[i]) continue;
        
        if(i>0 && nums[i] === nums[i-1] && !used[i-1]) continue;
        
        used[i] = true;
        cur.push(nums[i]);
        dfs(res, cur, used, nums);
        cur.pop();
        used[i] = false;
    }
    
    
}

var permuteUnique = function(nums) {
    let res = [], cur = [], used = [];
    nums.sort((a, b) => a - b);
    dfs(res, cur, used, nums);
    return res;
};