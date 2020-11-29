/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var neighbors = function(str, wordSet) {
    let res = [];
    
    for(let i=0; i<str.length; i++) {
        let arr = str.split("");
        for(let j=0; j<26; j++) {
            const char = String.fromCharCode(97+j);
            arr[i] = char;
            let newStr = arr.join("");
            if(wordSet.delete(newStr)) {
                res.push(newStr);
            }
        }
    }
    return res;
}
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [];
    queue.push(beginWord);
    
    let wordSet = new Set(wordList);
    wordSet.delete(beginWord);
    if(!wordSet.has(endWord)) return 0;
    
    let level = 1;
    
    while(queue.length > 0) {
        const size = queue.length;
        for(let i=0; i<size; i++) {
            const str = queue.shift();
            if(str === endWord) return level;
            for(const neighbor of neighbors(str, wordSet)) {
                queue.push(neighbor);
            }
        }
        level++;
    }
    
    return 0;
};