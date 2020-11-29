/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    for(let i = 0; i<=haystack.length - needle.length; i++) {
        for(let j=0; j<needle.length && haystack[i+j] === needle[j] ; j++) {
            if(j === needle.length - 1) return i;
        }
    }
    
    return -1;
};