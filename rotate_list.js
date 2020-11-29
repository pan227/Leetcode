/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
    
    let newHead, tail;
    newHead = tail = head;
    
    let length = 1;
    while(tail.next) {
        tail = tail.next;
        length++;
    }
    
    tail.next = head;
    
    let dist = length - k%length;
    
    while(dist>0) {
        tail = tail.next;
        dist--;
    }
    newHead = tail.next;
    tail.next = null;
    return newHead;
};