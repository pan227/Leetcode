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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if(!root) return null;
    return help(root);    
};

function help(node) {
    if(!node.left) return node;
    var tmp = help(node.left);
    node.left.left = node.right;
    node.right = null;
    node.left.right = node;
    node.left = null;
    return tmp;
}