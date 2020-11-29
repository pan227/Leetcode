/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max = 0;
    let max_index = 0;
    let res = 0
    for(let i=0; i<height.length; i++) {
        if(height[i] > max) {
            max = height[i];
            max_index = i;
        } 
    }
    
    let min_left = 0;
    for(let j=0; j<max_index; j++) {
        if(height[j] > min_left) 
            min_left = height[j];
        else 
            res += min_left - height[j];
    }
    
    let min_right = 0;
    for(let k=height.length - 1; k>max_index; k--) {
        if(height[k] > min_right) 
            min_right = height[k];
        else 
            res += min_right - height[k];
    }
    
    return res;
};
