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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        return this.helper(root)[1];
    }

    private helper(root): [number, boolean] {
        if (!root) return [0, true];

        const [lstHeight, lstBalanced] = this.helper(root.left);
        const [rstHeight, rstBalanced] = this.helper(root.right);

        const isBalanced = Math.abs(lstHeight - rstHeight) <= 1 && lstBalanced && rstBalanced;
        const height = 1 + Math.max(lstHeight, rstHeight);

        return [height, isBalanced];
    }
}
