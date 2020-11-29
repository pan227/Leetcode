/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var dfs = function(cans, res, cur, ind, target) {
    if(target === 0) {
        res.push([...cur]);
        return;
    }
    
    if(target < 0) return;
    
    for(let i=ind; i<cans.length; i++) {
        if(i>ind && cans[i] === cans[i-1]) continue;
        
        cur.push(cans[i]);
        dfs(cans, res, cur, i+1, target - cans[i]);
        cur.pop();
    }
}
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    
    let res = [], cur = [];
    
    dfs(candidates, res, cur, 0, target);
    return res;
};