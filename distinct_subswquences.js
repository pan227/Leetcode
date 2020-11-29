/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const sn = s.length;
    const tn = t.length;
    
    let dp = [];
    for(let i=0; i<=tn; i++) {
        dp[i] = [];
    }
    for(let i=0; i<=tn; i++) {
        dp[i][0] = 0;
    }
    
    for(let j=0; j<=sn; j++) {
        dp[0][j] = 1;
    }
    
    for(let i=0; i<tn; i++) {
        for(let j=0; j<sn; j++) {
            if(t[i] == s[j]) {
                dp[i+1][j+1] = dp[i][j] + dp[i+1][j];
            } else {
                dp[i+1][j+1] = dp[i+1][j];
            }
        }
    }
    
    return dp[tn][sn];
};
// loop  sp  pp  match
// 1     0   1   0       b
// 2     1   2   0       a
// 3     1   1   1       c
// 4     2   2   1       a
