/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // 1. Define three "pointers"
        // a) curr = captures current ListNode, if any
        // b) prev = captures previous ListNode, if any
        // c) next = captures next ListNode, if any
        //
        // 2. Initialize:
        //    prev = null
        //    curr = head
        //    next = head
        //
        // 3. Loop while current:
        //    next = curr.next
        //    curr.next = prev (this reverses the link of the current node)
        //    prev = curr (moves forward in the list)
        //    curr = next;
        //
        // Return prev, which is the new head
        //
        // Let n = number of nodes in the list
        // Time: O(n)
        // Space: O(1)
        let prev: ListNode | null = null;
        let curr: ListNode | null = head;
        let next: ListNode | null = curr;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }

        return prev;
    }
}
