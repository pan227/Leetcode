/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0) {
        return 0;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let currEnds = [intervals[0][1]];
    let rooms = 1;
    
    for(let i=1; i<intervals.length; i++) {
        const [start, end] = intervals[i];
        const minEnd = Math.min(...currEnds);
        if (start < minEnd) {
            currEnds.push(end);
            rooms++;
        } else {
            let minEndIndex = currEnds.indexOf(minEnd);
            currEnds[minEndIndex] = end;
        }
    }
    return rooms;
};