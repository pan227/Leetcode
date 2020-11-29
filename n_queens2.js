/**
 * @param {number} n
 * @return {number}
 */
let count = 0;
var solve = function(row, cols, dp, dn, size, res) {
    if(row === size) res.count++;
    
    for(let col=0; col<size; col++) {
        const dp_index = col - row + size;
        const dn_index = row + col;
        if(cols[col] || dp[dp_index] || dn[dn_index]) continue;
        cols[col] = true;
        dp[dp_index] = true;
        dn[dn_index] = true;
        
        solve(row+1, cols, dp, dn, size, res);
        
        cols[col] = false;
        dp[dp_index] = false;
        dn[dn_index] = false;
        
        
    }
}

var totalNQueens = function(n) {
    let cols = new Array(n).fill(false), dp = new Array(2*n).fill(false), dn = new Array(2*n).fill(false);
    let res = {count: 0};
    solve(0, cols, dp, dn, n, res);
    return res.count;
};
