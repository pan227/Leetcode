/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = [];
    const n = s.length;
    const cnt = words.length;
    if(n<=0 || cnt<=0) return res;
    
    let dict = {};
    for(const word of words) dict[word] = dict[word] ? dict[word]+1 : 1;
    
    const wl = words[0].length;
    
    for(let i=0; i<wl; i++) {
        let left = i, count = 0;
        
        let map = {};
        
        for(let j=i; j<=n-wl; j += wl) {
            const str = s.substr(j, wl);
            
            if(dict[str]) {
                map[str] = map[str] ? map[str]+1 : 1;
                
                if(map[str] <= dict[str]) {
                    count++;
                } else {
                    while(map[str] > dict[str]) {
                        const start = s.substr(left, wl);
                        map[start]--;
                        if(map[start] < dict[start]) count--;
                        left += wl;
                    }
                }
                console.log(dict, map);
                if(count === cnt) {
                    res.push(left);
                    const begin = s.substr(left, wl);
                    map[begin]--;
                    count--;
                    left += wl;
                }
            } 
            
            else {
                map = {};
                count = 0;
                left = j+wl;
            }
        }
    }
    
    return res;
};