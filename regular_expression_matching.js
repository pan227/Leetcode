/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

 //https://www.youtube.com/watch?v=c5vsle60Uw8
var isMatch = function(s, p) {
    if(s === null || p === null) {
        return false;
    }
    let dp = [];
    for(let i=0; i<=s.length; i++) {
        dp[i] = []
        for(let j=0; j<=p.length; j++) {
            dp[i][j] = false;
        }
    }
    
    dp[0][0] = true;
    
    for(let i=0; i<p.length; i++) {
        if(p[i] === "*" && dp[0][i-1]) {
            dp[0][i+1] = true;
        }
    }
    
    for(let i=0; i<s.length; i++) {
        for(let j=0; j<p.length; j++) {
            if(p[j] === "." || p[j] === s[i]) {
                dp[i+1][j+1] = dp[i][j];
            }
            
            if(p[j] === "*") {
                if(p[j-1] !== s[i] && p[j-1] !== ".") {
                    dp[i+1][j+1] = dp[i+1][j-1]
                } else {
                    dp[i+1][j+1] = dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1];
                }
            }
        }
    }
    
    return dp[s.length][p.length];
};