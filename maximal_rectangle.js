/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
    
    const m = matrix.length;
    const n = matrix[0].length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(n);
    let height = new Array(n).fill(0);
    let max = 0;
    
    for(let i=0; i<m; i++) {
        let cur_left = 0, cur_right = n;
        
        for(let j=0; j<n; j++) {
            height[j] = matrix[i][j] === "1" ? height[j]+1 : 0;
        }
        
       for(let j=0; j<n; j++) {
            if(matrix[i][j] === "1") {
                left[j] = Math.max(left[j], cur_left);
               //this means the current boundry should satisfy two conditions: within the boundry of the
               //previous height array, and within the boundry of the current row
            } else {
                cur_left = j+1;
                //when matrix[i][j] = 0, height[j] will get update to 0, so left[j] becomes 0,  since all
                //height in between 0 - j satisfies the condition of height[k] >= height[j];
                left[j] = 0;
                //since current position is '0', so the left most boundry for next "1" cell is at least j + 1;
            }
        }
        
        for(let j=n-1; j>=0; j--) {
            if(matrix[i][j] === "1") {
                right[j] = Math.min(right[j], cur_right);
            } else {
                cur_right = j;
                right[j] = n;
            }
        }
        
        for(let j=0; j<n; j++) {
            max = Math.max(max, (right[j] - left[j]) * height[j]);
        }
        
    }
    
    return max;
};