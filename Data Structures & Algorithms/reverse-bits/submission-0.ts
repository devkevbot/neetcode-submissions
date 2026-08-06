class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let result = 0;

        for (let i = 0; i < 32; i++) {
            const ithBit = (n >> i) & 1;
            result |= ithBit << (31 - i);
            
        }

        return result >>> 0;
    }
}
