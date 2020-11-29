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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    let queue = [];
    if(root === null) return [];
    queue.push(root);
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i=0; i<size; i++) {
            const cur = queue.shift();
            if(i === 0) result.push(cur.val);
            
            if(cur.right) queue.push(cur.right);
            if(cur.left) queue.push(cur.left);
        } 
    }
    
    return result;
};