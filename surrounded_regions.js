/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var check = function(board, i, j, row, col) {
    if(board[i][j] === "O") {
        board[i][j] = "1";
    
        if(i>1) check(board, i-1, j, row, col);
        if(i+1<row) check(board, i+1, j, row, col);
        if(j>1) check(board, i, j-1, row, col);
        if(i+1<col) check(board, i, j+1, row, col);
    }
}

var solve = function(board) {
    let i, j;
    const row = board.length;
    if(row === 0) return;
    const col = board[0].length;
    
    
    for(i=0; i<row; i++) {
        check(board, i, 0, row, col);
        if(col>1) check(board, i, col-1, row, col);
    }
    
    for(j=1; j<col-1; j++) {
        check(board, 0, j, row, col)
        if(row>1) check(board, row-1, j, row, col);
    }
    
    for(i=0; i<row; i++) {
        for(j=0; j<col; j++) {
            if(board[i][j] === "O") board[i][j] = "X";
        }
    }
    
    for(i=0; i<row; i++) {
        for(j=0; j<col; j++) {
            if(board[i][j] === "1") board[i][j] = "O";
        }
    }
};