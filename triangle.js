/**
 * @param {number[][]} triangle
 * @return {number}
 *example
 *i
 *0    2
 *1    3 4
 *2    6 5 7
 *3    4 1 8 3
 */
var minimumTotal = function(triangle) {
    for(let i = triangle.length - 2; i>=0; i--) {
        for(let j=0; j<=i; j++) {
            const left = triangle[i+1][j];
            const right = triangle[i+1][j+1];
            triangle[i][j] = Math.min(left, right) + triangle[i][j];
        }
    }
    return triangle[0][0];
};
