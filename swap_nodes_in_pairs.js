/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    
    const newHead = head.next;
    
    let a = head, b = head.next, pre = null;
    
    while(a!== null && b!== null) {
        
        a.next = b.next;
        b.next = a;
        if(pre !== null) pre.next = b;
        
        if(a.next === null) break;
        b = a.next.next;
        pre = a;
        a = a.next;
    }
    return newHead;
};