/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];
    let factorials = [1];
    
    let sb = "";
    
    let sum = 1;
    
    for(let i=1; i<=n; i++) {
        sum *= i;
        factorials[i] = sum;
    }
    
    for(let i=1; i<= n; i++) {
        nums.push(i);
    }
    
    k--;
    
    for(let i=1; i<=n; i++) {
        const index = parseInt(k/factorials[n-i]);
        
        sb = sb + nums[index];
        nums = nums.filter((el, id) => id !== index);
        k = k - factorials[n-i] * index;
    }
    return sb;
};