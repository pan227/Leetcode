/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    backtrack(res, "", 0, 0, n);
    return res;
};

var backtrack = function(res, cur, open, close, max) {
    if(cur.length === max*2) {
        res.push(cur);
        return;
    }
    
    if(open < max) backtrack(res, cur+"(", open+1, close, max);
    if(close < open) backtrack(res, cur+")", open, close+1, max);
    
}