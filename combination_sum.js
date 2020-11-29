/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var backtracking = function(start, results, comb, remaining, candidates) {
    if(remaining === 0) {
        results.push(comb);
    } else if (remaining < 0) {
        return;
    } else {
        for(let i = start; i<candidates.length; i++) {
            comb.push(candidates[i]);
            backtracking(i, results, [...comb], remaining - candidates[i], candidates);
            comb.pop();
        }
    }

}

var combinationSum = function(candidates, target) {
    const results = [];
    const comb = [];
    backtracking(0, results, comb, target, candidates);
    return results;
};