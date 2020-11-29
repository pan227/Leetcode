/**
 * Time Complexity: O(S) + O(T)
 * Space Complexity: O(S) + O(T)
 */
var minWindow = function(s, t) {
    let sMap = {}, tMap = {}, result = "", count = 0;
    
    for(let i = 0; i < t.length; i++) {
        tMap[t[i]] ? tMap[t[i]]++ : tMap[t[i]] = 1;
    }
    
    for(let i=0, j=0; j<s.length; j++) {
        const c = s[j];
        if(tMap[c]) {
             sMap[c] ? sMap[c]++ : sMap[c] = 1;
             if(tMap[c] >= sMap[c]) count++;
             
        }
        
        if(count === t.length) {
            while(tMap[s[i]] < sMap[s[i]] || !tMap[s[i]]) {
                if(tMap[s[i]] < sMap[s[i]]) {
                    sMap[s[i]]--;
                }
                i++;
            }
            
            if(j-i+1 < result.length || result === "") {
                result = s.slice(i, j+1);
            }
        }
    }
    
    return result;
};