class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Let n = number of elements in array
        // Time: O(n)
        // Space: O(n)

        let longest = 0;
        const seen = new Set<number>(nums);

        for (const n of nums) {
            // Avoid repeating work
            // For example, if n = 4 and 3 is in the set, then we know the longest sequence
            // can't start from 4, it starts from 3 or something earlier
            if (!seen.has(n - 1)) {
                let currentLength = 1;
                while (seen.has(n + currentLength)) {
                    currentLength++;
                }

                longest = Math.max(longest, currentLength);
            }
        }

        return longest;
    }
}
