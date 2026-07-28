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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) return true;
        if (!root) return false;

        return this.isSameTree(root, subRoot) || 
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot);
    }

    private isSameTree(root1, root2): boolean {
        if (!root1 && root2) return false;
        if (root1 && !root2) return false;
        if (!root1 && !root2) return true;

        return root1.val === root2.val && 
            this.isSameTree(root1.left, root2.left) &&
            this.isSameTree(root1.right, root2.right);
    }
}
