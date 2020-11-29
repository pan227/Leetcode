/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const len = heights.length;
    let stack = [];
    let max = 0;
    heights.push(0);
    for(let i=0; i<=len; i++) {
        const h = heights[i];
        const top = stack[stack.length-1];
        if(stack.length === 0 || h >= heights[top]) {
            stack.push(i);
        } else {
            const poped = stack.pop();
            const isEmpty = stack.length === 0;
            max = Math.max(max, heights[poped] * (isEmpty ? i : i-1-stack[stack.length-1] ));
            i--;
        }
    } 
    
    return max;
};