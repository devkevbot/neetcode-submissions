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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // Make a dummy "head" node used as convenience for returning the answer
        //
        // While both lists have elements:
        //  compare the next element in each list
        //  take the lesser of the two elements (what about ties?)
        // When one list is exhausted:
        //  append the rest of the list remaining
        // return dummy's next

        let dummy: ListNode = new ListNode();
        let head = dummy;

        let list1Head = list1;
        let list2Head = list2;

        while (list1Head && list2Head) {
            if (list1Head.val <= list2Head.val) {
                head.next = list1Head;
                list1Head = list1Head.next;
            } else {
                head.next = list2Head;
                list2Head = list2Head.next;
            }
            head = head.next;
        }

        if (list1Head) {
            head.next = list1Head;
        } else if (list2Head) {
            head.next = list2Head;
        }

        return dummy.next;
    }
}
