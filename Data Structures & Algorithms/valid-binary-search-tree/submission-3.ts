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
    isValidBST(root: TreeNode | null): boolean {
      return this.helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }   

    private helper(root: TreeNode | null, min: number, max: number): boolean {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;

        const newMin = Math.max(min, root.val);
        const newMax = Math.min(max, root.val);

        return this.helper(root.left, min, newMax) && this.helper(root.right, newMin, max);
    }
}
