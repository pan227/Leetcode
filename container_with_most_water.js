/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, left = 0, right = height.length - 1;
    
    while(right > left) {
        let h = Math.min(height[left], height[right]);
        
        max = Math.max(max, h * (right - left));
        
        if(height[left] < height[right]) left++;
        else right--;
    }
    
    return max;
};