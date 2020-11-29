/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var dfs = function(s, wordDict, map) {
    if(map.has(s)) {
        return map.get(s);
    }
    
    let res = [];
    if(s.length === 0) {
        res.push("");
        return res;
    }
    
    for(const word of wordDict) {
        if(s.startsWith(word)) {
            const subList = dfs(s.slice(word.length), wordDict, map);
            for(const sub of subList) {
                res.push(word + (sub.length === 0 ? "" : " ") + sub);
                //for add the last element, otherwise for end, the subList is empty
            }
        }
    }
    
    map.set(s, res);
    return res;
}


var wordBreak = function(s, wordDict) {
    return dfs(s, wordDict, new Map());
};