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
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    let queue = [root];
    let res = [];
    let order = true;
    
    while(queue.length > 0) {
        let size = queue.length;
        
        let curList = [];
        for(let i=0; i<size; i++) {
            const curNode = queue.shift();
            if(order) {
                curList.push(curNode.val);
            } else {
                curList.unshift(curNode.val);
            }
            
           if(curNode.left) queue.push(curNode.left);
           if(curNode.right) queue.push(curNode.right);
        }
        res.push(curList);
        order = !order;
    }
    return res;
};