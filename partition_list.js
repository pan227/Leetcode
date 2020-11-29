/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    
    let cur1 = dummy1;
    let cur2 = dummy2;
    
    while(head!==null) {
        if(head.val < x) {
            cur1.next = head;
            cur1 = cur1.next;
        } else {
            cur2.next = head;
            cur2 = cur2.next; 
        }
        head = head.next;
    }
    
    cur2.next = null;
    cur1.next = dummy2.next;
    
    return dummy1.next;
};