class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const n = nums.length;

        const expectedSum = 0.5 * n * (n + 1);
        const actualSum = nums.reduce((sum, num) => sum + num, 0);

        return expectedSum - actualSum;
    }
}
