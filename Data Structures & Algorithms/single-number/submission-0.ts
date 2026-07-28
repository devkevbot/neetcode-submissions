class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        // Loop through numbers
        // XOR number with a bitmask
        // Two XORS will unset the bits of that number
        // Remaining value is the number!

        let bitmask = 0;

        for (const num of nums) {
            bitmask ^= num;
        }

        return bitmask;
    }
}
