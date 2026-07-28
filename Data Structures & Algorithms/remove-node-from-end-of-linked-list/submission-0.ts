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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        // 1. One pass -> determine how long the list is
        // 2. Calculate how many nodes to traverse to reach the (n + 1th) node from the end of the list

        let lengthOfList = 0;
        for (let curr = head; curr; curr = curr.next) {
            lengthOfList++;
        }

        if (lengthOfList === n) {
            return head.next;
        }

        let curr = head;
        for (let i = 0; i < (lengthOfList - n - 1); i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;

        return head;
    }
}
