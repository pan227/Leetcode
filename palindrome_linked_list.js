/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverse = function(head) {
    let prev = null;
    
    while(head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
 
}
var isPalindrome = function(head) {
    let fast = head, slow = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if(fast!==null) {
        slow=slow.next;
    }
    
    slow=reverse(slow);
    fast = head;
    
    while (slow !== null) {
        if(fast.val !== slow.val) {
            return false;
        }
        
        fast = fast.next;
        slow = slow.next;
        
    }
    return true;
};