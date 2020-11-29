/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var helper = function(board, word, i, j, w, visited) {
    if(w === word.length) return true;
    if(i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j] !== word[w] || visited[i][j]) {
       return false;
    }
    
    visited[i][j] = true;
    
    if(helper(board, word, i-1, j, w+1, visited) || 
       helper(board, word, i+1, j, w+1, visited) ||
       helper(board, word, i, j-1, w+1, visited) ||
       helper(board, word, i, j+1, w+1, visited)
       ) {
        return true;
    }
    
    visited[i][j] = false;
    return false;
}

var exist = function(board, word) {
    let visited = [];
    for(let i=0; i< board.length; i++) {
        visited[i] = [];
        for(let j=0; j<board[0].length; j++) {
            visited[i][j] = false;
        }
    }
    
    for(let i=0; i< board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(word[0] === board[i][j] && helper(board, word, i, j, 0, visited))
                return true;
        }
    }
    return false;
};