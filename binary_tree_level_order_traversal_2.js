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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];
    
    while(queue.length > 0) {
        const size = queue.length;
        let level_array = [];
        for(let i=0; i<size; i++) {
            const cur = queue.shift();
            
            level_array.push(cur.val);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        result.unshift(level_array);
    }
    return result;
    
};