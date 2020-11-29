/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const mySet = new Set();
    
    for(const n of nums) mySet.add(n);
    let res = 0;
    
    for(const v of mySet.values()) {
        if(!mySet.has(v-1)) {
            let m = v+1;
            
            while(mySet.has(m)) {
                m=m+1
            }
            
            res = Math.max(res, m-v)
        }
    }
    
    return res;
};