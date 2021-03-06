/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(i===0 && j===0) {
                if(obstacleGrid[0][0] === 1) return 0;
                else obstacleGrid[0][0] = 1;
            }
            else if(i===0) {
                if(obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0;
                else obstacleGrid[i][j] = obstacleGrid[i][j-1];
            } else if (j===0) {
                if(obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0;
                else obstacleGrid[i][j] = obstacleGrid[i-1][j];
            } else if(obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0;
            } else {
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
            }
            
        }
    }

    
    return obstacleGrid[m-1][n-1];
};
