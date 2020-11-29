/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let d = new Array(n).fill(false);
    
    for(let i=0; i<n; i++) {
        for(const w of wordDict) {
            const wlen = w.length;
            if(w===s.slice(i-wlen+1, i+1) && (d[i-wlen] || i-wlen === -1)) {
                d[i] = true;
            }
        }
    }
    
    return d[n-1];
    
};