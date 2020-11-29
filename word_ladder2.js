/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let ans = [];
    let paths = [[beginWord]];
    
    let wordSet = new Set(wordList);
    
    if(!wordSet.has(endWord)) return [];
    let level = 1;
    let min_level = Number.MAX_VALUE;
    
    let visited = new Set();
    
    while(paths.length > 0) {
        let path = paths.shift();

        if(path.length > level) {
            for(let item of visited.values()) {
                wordSet.delete(item);
            }
            visited.clear();
            if(path.length > min_level) {
                break;
            } else {
                level = path.length;
            }
        }
        
        let last = path[path.length - 1];
        
        for(let i=0; i<last.length; i++) {
           
            for(let j=0; j<25; j++) {
                let cur = last.split("");
                cur[i] = String.fromCharCode(97+j);
                let news = cur.join("");
                
                if(wordSet.has(news)) {
                    visited.add(news);
                    const newPath = [...path, news];
                    if(news === endWord) {
                        min_level = level;
                        ans.push(newPath);
                    } else {
                        paths.push(newPath);
                    }
                }
            }
        }
    }
    return ans;
};