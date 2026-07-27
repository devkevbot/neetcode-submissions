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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const seen = new Set();

        for (let curr = head; curr; curr = curr.next) {
            if (seen.has(curr)) {
                return true;
            }
            seen.add(curr);
        }

        return false;
    }
}
