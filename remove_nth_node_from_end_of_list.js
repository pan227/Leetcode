/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head, offsetNode = head;
    
    for(let i=0; i<n; i++) {
        node = node.next;
    }
    
    if(node === null) return head.next;
    
    while(node.next !== null) {
        node = node.next;
        offsetNode = offsetNode.next;
    }
    
    offsetNode.next = offsetNode.next.next;
    
    return head;
};