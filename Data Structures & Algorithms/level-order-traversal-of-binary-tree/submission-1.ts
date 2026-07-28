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
        const levels = [];

        const q = new Queue();
        if (root) {
            q.push(root);
        }

        while (!q.isEmpty()) {
            const size = q.size();

            const level = [];

            for (let i = 0; i < size; i++) {
                const node = q.pop();
                
                level.push(node.val);

                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }

            levels.push(level);
        }

        return levels;
    }
}
