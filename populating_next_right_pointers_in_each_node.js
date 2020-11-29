/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var dfs = function(cur, next) {
    if(!cur) return;
    cur.next = next;
    
    dfs(cur.left, cur.right);
    dfs(cur.right, cur.next == null ? null : cur.next.left);
}


var connect = function(root) {
    dfs(root, null);
    return root;
};