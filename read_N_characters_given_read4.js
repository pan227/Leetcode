/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let eos = false;
        let j = 0;
        
        while (!eos) {
            const buf4 = [];
            read4(buf4);
        
            for (let i = 0; i < buf4.length && j < n; i++) {
                buf[j++] = buf4[i];
            }
            
            if (buf4.length < 4) eos = true; 
        }
    
        return j;        
    };
};