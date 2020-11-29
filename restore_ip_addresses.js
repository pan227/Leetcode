/**
 * @param {string} s
 * @return {string[]}
 */

var helper = function(res, path, s, index) {
    if(s.length === 0 || index === 4) {
        if(s.length === 0 && index === 4) {
            res.push(path.slice(1));
        }
        return;
    }
    
    for(let i=1; i<= (s[0] === "0" ? 1 : 3) && i <= s.length; i++) {
        let cur = parseInt(s.slice(0, i));
        if(cur <= 255) {
            helper(res, path+"."+cur, s.slice(i), index+1);
        }
    }
}
var restoreIpAddresses = function(s) {
    let res = [];
    helper(res, "", s, 0);
    return res;
};