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
var deleteDuplicates = function(head) {
    if(!head) return head;
    
    let dummy = new ListNode(0 === head.val ? 1 : 0);
    
    dummy.next = head;
    
    let pre = dummy;
    let curr = head;
    
    let first = dummy;
    
    while(curr && curr.next) {
        if(pre.val !== curr.val && curr.val !== curr.next.val) {
            first.next = curr;
            first = first.next;
        }
        pre = curr;
        curr = curr.next;
    }
    if(pre.val !== curr.val) {
        first.next = curr;
        first = first.next;
    }
    
    first.next = null;
    return dummy.next;
};