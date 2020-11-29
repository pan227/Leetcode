/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let head = dummy;
    
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let v1 = 0, v2 = 0, v = carry;
        if (l1) {
           v += l1.val;
           l1 = l1.next;
        } 
        if (l2) {
           v += l2.val;
           l2 = l2.next;      
        }

        if(v>=10) {
            v = v - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        head.next = new ListNode(v);
        head = head.next;      
    }
    return dummy.next;
};