/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    if(rows === 0) return false;
    let cols = matrix[0].length;
    
    let left = 0, right = rows * cols - 1;
    
    let pivotIdx, pivotEle;
    
    while(left <= right) {
        pivotIdx = Math.floor((left + right) / 2);
        
        pivotEle = matrix[Math.floor(pivotIdx/cols)][pivotIdx%cols];
        
        if(pivotEle === target) {
            return true;
        } else {
            if(pivotEle < target) {
                left = pivotIdx + 1;
            } else {
                right = pivotIdx - 1;
            }
        }
    }
    return false
    
};