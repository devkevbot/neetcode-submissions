class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        // Iterate from 0 to <= n
        // Bitshift mask of '1' until end
        const results = new Array(n + 1).fill(0);

        for (let i = 0; i <= n; i++) {
            let j = i;
            let oneBits = 0;
            while (j > 0) {
                oneBits += j & 1;
                j = j >> 1;
            }
            results[i] = oneBits;
        }

        return results;
    }
}
