/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [""];
    
    if(digits === "") return [];
    
    const map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    
    for(let i=0; i<digits.length; i++) {
        const x = Number.parseInt(digits[i]);
        
        while(ans[0].length === i) {
            const p = ans.shift();
            for(let s of Array.from(map[x])) {
                ans.push(p+s);
            }
        }
    }
    return ans;
};