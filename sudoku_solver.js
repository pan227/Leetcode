/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var isValid = function(board, row, col, num) {
    const brow = Math.floor(row/3) * 3;
    const bcol = Math.floor(col/3) * 3;
    
    for(let i=0; i<9; i++) {
        if(board[row][i] === num || board[i][col] === num || board[brow + Math.floor(i/3)][bcol + i%3] === num) {
            return false;
        }
    }
    return true;
}

var solve = function(board, r, c) {
    for(let i=r; i<9; i++, c=0) {
        for(let j=c; j<9; j++) {
            if(board[i][j] !== ".") continue;
            
            for(let k="1"; k<="9"; k++) {
                if(isValid(board, i, j, k+"")) {
                    board[i][j] = k+"";
                    if(solve(board, i, j+1)) return true;
                    board[i][j] = ".";
                }
            }
            return false;
        }
    }
    return true;
}

var solveSudoku = function(board) {
    if(!board || board.length === 0) {
        return;
    }
    
    solve(board, 0, 0);
};