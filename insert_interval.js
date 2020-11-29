/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [];
    
    for(const [start, end] of intervals) {
        if(!newInterval || end < newInterval[0]) {
            res.push([start, end]);
        } else if(newInterval[1] < start) {
            res.push(newInterval);
            newInterval = null;
            res.push([start, end]);
        } else {
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }
    
    if(newInterval) res.push(newInterval);
    return res;
};