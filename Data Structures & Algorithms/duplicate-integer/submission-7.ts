class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // 1. Create a set to store numbers
        // 2. Loop over each num:
        // If set contains num, return true
        // Else put num in set
        const seen = new Set<number>();

        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}
