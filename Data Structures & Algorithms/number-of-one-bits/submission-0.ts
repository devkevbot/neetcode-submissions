class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let numBits = 0;

        while (n > 0) {
            numBits += n & 1;
            n >>= 1;
        }
        
        return numBits;
    }
}
