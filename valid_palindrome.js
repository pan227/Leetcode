/**
 * @param {string} s
 * @return {boolean}
 */

var isLetterOrDigit = function(c) {
    return c>="a" && c<="z" || c>="0" && c<="9";
}

var isPalindrome = function(s) {
    let s1 = s.toLowerCase();
    let h = 0, t = s1.length - 1;
    let hc, tc;
    
    while(h<t) {
        hc = s1[h];
        tc = s1[t];
        
        if (!isLetterOrDigit(hc)) {
            h++;
        } else if(!isLetterOrDigit(tc)) {
            t--;
        } else {
            if(hc !== tc) return false;
            
            h++;
            t--;
        }
    }
    return true;
    
};