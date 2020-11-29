/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let rowBegin = 0;
    let colBegin = 0;
    let rowEnd = m - 1;
    let colEnd = n - 1;
    
    let res = [];
    
    while(rowBegin <= rowEnd && colBegin <= colEnd) {
        for(let i = colBegin; i<=colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        
        for(let j = rowBegin; j<=rowEnd; j++) {
            res.push(matrix[j][colEnd]);
        }
        colEnd--;
        
        if(rowBegin <= rowEnd) {
            for(let i=colEnd; i>=colBegin; i--) {
                res.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        
        if(colBegin <= colEnd) {
            for(let i=rowEnd; i>=rowBegin; i--) {
                res.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
        
        
        
    }
    return res;
};