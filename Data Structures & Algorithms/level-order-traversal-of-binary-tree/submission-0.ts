/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        // 1. Initialize a queue with root
        // 2. While queue is not empty:
        //    snapshot size of queue:
        //    pop from queue over snapshotted size
        //    push childen into queue
        const levels = [];
        const queue: TreeNode[] = [];
        if (root) {
            queue.push(root);
        }

        while (queue.length > 0) {
            const size = queue.length;
            const level = [];
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            levels.push(level);
        }

        return levels;
    }
}
