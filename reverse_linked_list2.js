/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head) return head;
    
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    
    for(let i=1; i < left; i++) {
        pre = pre.next;
    }
    
    let curr = pre.next;
    
    for(let i=left; i<right; i++) {
        let next = curr.next;
        curr.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    
    return dummy.next;
};