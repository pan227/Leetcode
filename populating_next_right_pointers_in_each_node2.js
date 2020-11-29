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
var connect = function(root) {
    if(root === null) return root;
    
    let curr = root;
    let nextDummyHead = new Node();
    let nextLevel = nextDummyHead;
    
    while(curr !== null) {
        if(curr.left) {
            nextLevel.next = curr.left;
            nextLevel = nextLevel.next;
        }
        
        if(curr.right) {
            nextLevel.next = curr.right;
            nextLevel = nextLevel.next;
        }
        
        if(curr.next) {
            curr = curr.next;
        } else {
            curr = nextDummyHead.next;
            nextDummyHead.next = null;
            nextLevel = nextDummyHead;
        }
    }
    return root;
};