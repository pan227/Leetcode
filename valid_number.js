/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    'use strict'
    
    /**
     * Returns true for any string that contains digits, may contain leading sign and (for isInt === false) one dot
     * @param {string} str
     * @param {boolean} isInt Stricts validation rules to integers only
     * @return {boolean}
     */
    function isSimpleNumber(str, isInt) {
        
        let dotCount = 0
        let digitCount = 0
        let startIndex = (str[0] === '-' || str[0] === '+') ? 1 : 0
        
        for (let i = startIndex; i < str.length; ++i) {
            if (str[i] === '.') dotCount++
            if (str[i] >= '0' && str[i] <= '9') digitCount++
            if ((str[i] < '0' || str[i] > '9') && str[i] !== '.') return false
        }
        
        return digitCount > 0 && ((isInt && dotCount === 0) || (!isInt && dotCount <= 1))
    }
    
    s = s.trim()
    
    if (s.includes('E') || s.includes('e')) {
        let parts;
        if(s.includes('E')) parts = s.split('E');
        else parts = s.split('e');

        if (parts.length !== 2 || parts[0] === '' || parts[1] === '') return false
     
        return isSimpleNumber(parts[0]) && isSimpleNumber(parts[1], true)
        
    } else {
     
        return isSimpleNumber(s)
    }
};