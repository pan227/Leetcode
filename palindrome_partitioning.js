/**
 * @param {string} s
 * @return {string[][]}
 */

var isValid = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while(right>=left) {
        if(s[left] === s[right]) {
            right--;
            left++;
        } else {
            return false;
        }
    }
    return true;
}

var helper = function(res, s, temp, start) {
    if(start === s.length) {
        res.push([...temp]);
        return;
    }
    for(let i=start+1; i<=s.length; i++) {
        const slice = s.slice(start, i);
        if(isValid(slice)) {
            temp.push(slice);
            helper(res, s, temp, i);
            temp.pop();
        }
    }
}

var partition = function(s) {
    let res = [], temp = [];
    helper(res, s, temp, 0);
    return res;
};