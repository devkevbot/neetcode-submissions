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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const result: number[] = [];

        const queue = new Queue();
        if (root) {
            queue.push(root);
        }

        while (!queue.isEmpty()) {
            const size = queue.size();

            for (let i = 0; i < size; i++) {
                const node = queue.pop();
                if (i === size - 1) {
                    result.push(node.val);
                }
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}
