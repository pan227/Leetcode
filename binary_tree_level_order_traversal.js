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
var levelOrder = function(root) {
    let queue = [];
    let res = [];
    if(root === null) return [];
    queue.push(root);
    
    while(queue.length) {
        const size = queue.length;
        const curList = [];
        
        for(let i=0; i<size; i++) {
            const curNode = queue.shift();
            curList.push(curNode.val);
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);
        }
        res.push(curList);  
    }
    return res;
};