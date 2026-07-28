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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.heightOfSubtree(root);
        return this.maxDiameter;
    }

    private maxDiameter = 0;
    
    private heightOfSubtree(root): number {
        if (!root) return 0;

        let diameter =  this.heightOfSubtree(root.left) + this.heightOfSubtree(root.right);
        this.maxDiameter = Math.max(this.maxDiameter, diameter);

        return 1 + Math.max(this.heightOfSubtree(root.left), this.heightOfSubtree(root.right));
        
    }
}
