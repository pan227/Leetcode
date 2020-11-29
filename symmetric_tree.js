// use helper function isMirror
// use recursive

var isMirror = function(left, right) {
    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    
    return (left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right);
}

var isSymmetric = function(root) {
    if(root === null) return true;
    return isMirror(root.left, root.right);
};