class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        // Let n = size of input
        // Time: O(n)
        // Space: O(n)
        const results = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
           results[i] = results[i >> 1] + (i & 1);
        }

        return results;
    }
}
