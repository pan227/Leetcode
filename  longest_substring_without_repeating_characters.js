/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * start is the maxLength string start and end point
 */
var lengthOfLongestSubstring = function(s) {
    let maxL = 0, map = {}, start = 0, end = 0;
    
    for(let i=0, j=0; j<s.length; j++) {
        if(map[s[j]]) {
            i = Math.max(i, map[s[j]]);
        }
        if(j-i+1 > maxL) {
            maxL = j-i+1;
            start = i;
            end = j;
        }
        map[s[j]] = j+1;
    }
    return maxL;
};