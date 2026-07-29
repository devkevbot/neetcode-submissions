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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const path = [];
        this.inOrderTraversal(root, path);
        return path.at(k - 1);
    }

    private inOrderTraversal(root: TreeNode | null, path: Array<number>) {
        if (!root) return;

        this.inOrderTraversal(root.left, path);
        path.push(root.val);
        this.inOrderTraversal(root.right, path);
    } 
}
