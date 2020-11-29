/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let rowBegin = 0;
    let rowEnd = n-1;
    let k = 1;
    let colBegin = 0;
    let colEnd = n-1;
    let matrix = [];
    for(let i=0; i<n; i++) {
        matrix[i] = [];
    }
    
    while(rowBegin <= rowEnd && colBegin <=colEnd) {
        for(let i = colBegin; i<=colEnd; i++) {
            matrix[rowBegin][i] = k++;
        }
        rowBegin++;
        
        for(let j = rowBegin; j<=rowEnd; j++) {
            matrix[j][colEnd] = k++;
        }
        colEnd--;
        
            for(let i=colEnd; i>=colBegin; i--) {
                matrix[rowEnd][i] = k++;
            }
        rowEnd--;
        
        if(colBegin <= colEnd) {
            for(let i=rowEnd; i>=rowBegin; i--) {
                matrix[i][colBegin] = k++;
            }
        }
        colBegin++;
    }
    
    return matrix;
};