/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    let cut = [];
    cut[0] = 0;
    
    let dp = [];
    for(let i=0; i<n; i++) {
        dp[i] = [];
    }
    
    for(let i=1; i<n; i++) {
        let min = i;
        
        for(let j=0; j<=i; j++) {
            if(s[i] === s[j] && (i-j<2 || dp[j+1][i-1])) {
                dp[j][i] = true;
                min = j===0 ? 0 : Math.min(min, cut[j-1] + 1);
            }
        }
        cut[i] = min;
    }
    return cut[n-1];
};