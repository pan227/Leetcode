/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var asciiDif = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);

var isAnagram = function(s, t) {
    let alphabet = new Array(26).fill(0);
    
    for(let i=0; i<s.length; i++) {
        alphabet[asciiDif(s[i], "a")]++;
    }
    
    for(let i=0; i<t.length; i++) {
        alphabet[asciiDif(t[i], "a")]--;
        if(alphabet[asciiDif(t[i], "a")] < 0) return false;
    }

    for(let i of alphabet) {
        if(i !== 0) return false;
    }
    
    return true;
};