/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    if(n<=1) return 0;
    
    if (k >=  n/2) {
        let maxPro = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i-1])
                maxPro += prices[i] - prices[i-1];
            }
        return maxPro;
    }
    let dp = [];
    
    for(let i=0;i<=k; i++) {
        dp[i] = [];
        for(let j=0; j<n; j++) {
            dp[i][j] = 0;
        }
    }
//for t transactions on j-th days
    for(let t=1; t<=k; t++) {
        let max = -prices[0]; 
        // because j-1 will overflow. so here we write the max at position 0 independently
        for(let j=1; j<n; j++) {
            max = Math.max(max,  dp[t-1][j-1]- prices[j]); //calculate max money after buying
            dp[t][j] = Math.max(dp[t][j-1], prices[j] + max);
        }
        
    }
    
    return dp[k][n-1];
};