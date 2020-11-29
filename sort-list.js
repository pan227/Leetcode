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
function split(node, n) {
    while(n!== 1 && node) {
        n--;
        node = node.next;
    }
    
    let rest = node ? node.next : null;
    if(node) node.next = null; // why
    return rest;
}

function merge(left, right, pre) {
    let current = pre;
    while(left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    current.next = left||right;
    while (current.next) current = current.next;
    return current;

}

var sortList = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let length = 0;
    let curr = head;
    while(curr) {
        curr = curr.next;
        length++;
    }
    
    for(let i=1; i<length; i=i*2) {
        let pre = dummy;
        let curr = dummy.next;
        
        while(curr) {
            let left = curr;
            let right = split(left, i);
            curr = split(right, i);
            pre = merge(left, right, pre);
        }
    }
    return dummy.next;
};


