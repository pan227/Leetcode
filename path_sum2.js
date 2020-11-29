/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var dfs = function(root, targetSum, path, paths) {
    //if(!root) return;
    path.push(root.val);
    if(!root.left && !root.right && targetSum === root.val) {
        paths.push(path);
        return;
    } 
    if(root.left) dfs(root.left, targetSum - root.val, [...path], paths);
    if(root.right)  dfs(root.right, targetSum - root.val, [...path], paths);
    path.pop();
}


var pathSum = function(root, targetSum) {
    if(!root) return [];
    let path = [], paths = [];
    
    dfs(root, targetSum, path, paths);
    
    return paths;
};