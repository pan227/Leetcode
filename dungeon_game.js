/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// -2  -3   3  | MAX
// -5  -10  1  | MAX
// 10  30   -5 | 1
// MAX MAX  1  | MAX

var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;
    
    let dp = [];
    
    for(let i=0; i<=M; i++) {
        dp[i] = [];
        dp[i][N] = Number.MAX_VALUE;
    }
    
    for(let i=0; i<=N; i++) {
        dp[M][i] = Number.MAX_VALUE;
    }
    
    dp[M-1][N] = dp[M][N-1] = 1;
    
    for(let i=M-1; i>=0; i--) {
        for(let j=N-1; j>=0; j--) {
            dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
        }
    }
    
    return dp[0][0];
};