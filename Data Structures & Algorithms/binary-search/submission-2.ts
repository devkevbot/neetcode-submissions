class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // 1. Compute midpoint of array
        // 2. Repeat while left <= right: Get value at midpoint:
        // a) if value matches target, return midpoint
        // b) if value < target, then search right half of array
        // c) if value > target, then search left half of array
        // 3. Return -1 otherwise

        // Let n = number of numbers
        // Time: O(log n)
        // Space: O(1)

        let l = 0;
        let r = nums.length - 1;
        
        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            const value = nums[m];
            if (value === target) {
                return m;
            } else if (value < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
}
