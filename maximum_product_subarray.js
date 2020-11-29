/**
 * @param {number[]} nums
 * @return {number}
 */
//     2. 3. -2. 4
//MAX  2  6  -2. 4
//MIN  2  3  -12 -48

var maxProduct = function(nums) {
    let r = nums[0];
    
    for(let i=1, max_so_far = r, min_so_far = r; i<nums.length; i++) {
        if(nums[i] < 0) {
            let temp = min_so_far;
            min_so_far = max_so_far;
            max_so_far = temp;
        }
        
        max_so_far = Math.max(nums[i], nums[i] * max_so_far);
        min_so_far = Math.min(nums[i], nums[i] * min_so_far);
        
        r = Math.max(r, max_so_far);
    }
    
    return r;
};