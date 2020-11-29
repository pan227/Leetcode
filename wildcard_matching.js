/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    let slen = s.length;
    let plen = p.length;
    let dp = [];

    for(let i=0; i<=slen; i++) {
        dp[i] = [];
        for(let j=0; j<=plen; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    
    for(let j=1; j<=plen; j++) {
        dp[0][j] = dp[0][j-1] && p[j-1] === "*";
    }
    
    for(let i=1; i<=slen; i++) {
        for(let j=1; j<=plen; j++) {
            if(s[i-1] === p[j-1] || p[j-1] === "?") {
                dp[i][j] = dp[i-1][j-1];
            } else if(p[j-1] === "*") {
                dp[i][j] = dp[i-1][j] || dp[i][j-1];
            }
        }
    }
    
    return dp[slen][plen];
};
