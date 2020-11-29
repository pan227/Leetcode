/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    if(n===1) return 1;
    let second = 2;
    let temp;
    for(let i=3; i<=n; i++) {
        temp = second;
        second = second + first; 
        first = temp;
 
    }
    return second;
};