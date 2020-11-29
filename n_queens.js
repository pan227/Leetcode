/**
 * @param {number} n
 * @return {string[][]}
 */

var isValid = function(board, row, col) {
    for(let i=0; i<row; i++) {
        for(let j=0; j<board.length; j++) {
            if(board[i][j] === "Q" && (j === col || j-i === col-row || i+j === row+col)) {
                return false;
            }
        }
    }
    
    return true;
}

const construct = function(board) {
    let res = [];
    for(let i=0; i<board.length; i++) {
        let temp = "";
        for(let j=0; j<board.length; j++) {
            temp = temp+board[i][j];
        }
        res.push(temp);
    }
    return res;
}

var solve = function(res, board, row) {
    
    if(row === board.length) {
        res.push(construct(board));
    }
    
    for(let col=0; col<board.length; col++) {
        if(isValid(board, row, col)) {
            board[row][col] = "Q";
            solve(res, board, row+1);
            board[row][col] = ".";
        }
    }
}



var solveNQueens = function(n) {
    let board = [];
    for(let i=0; i<n; i++) {
        board[i] = [];
        for(let j=0; j<n; j++) {
            board[i][j] = ".";
        }
    }
    
    const res = [];
    solve(res, board, 0);
    return res;
};