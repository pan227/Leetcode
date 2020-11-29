/**
 * @param {string} s
 * @return {string}
 */
var expandAroundCorner = function(s, l, r) {
    let L = l, R = r;
    
    while(L>=0 && R<s.length && s[L] === s[R]) {
        L--;
        R++
    }
    return R-L-1;
}
var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let start = 0, end = 0;
    
    for(let i=0; i<s.length; i++) {
      const l1 = expandAroundCorner(s, i, i);
      const l2 = expandAroundCorner(s, i, i+1);
      const l = Math.max(l1, l2);
      if (l > end - start) {
            start = i - Math.floor((l - 1) / 2);
            end = i + Math.floor(l / 2);
        }
    }
    
    return s.slice(start, end+1);
};