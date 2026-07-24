class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // Compute prefix and suffix products arrays
        // Multiple prefix[i] with suffix[i] to find product except at i
        //
        // Let n = number of input elements
        // Time: O(n)
        // Space: O(n)
        //
        // input: [1, 2, 4, 6]
        // prefix product at i, excluding i itself:
        // [1, 1, 2, 8]
        // suffix product at i, excluding i itself:
        // [48, 24, 6, 1]
        // multiply prefix[i] by suffix[i]:
        // [48, 24, 12, 8]
        //
        // input: [-1, 0, 1, 2, 3]
        // prefix:
        // [1, -1, 0, 0, 0]
        // suffix:
        // [0, 6, 6, 3, 1]
        // multiply prefix[i] by suffix[i]:
        // [0, -6, 0, 0, 0]

        const prefixes = new Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            prefixes[i] = nums[i - 1] * prefixes[i - 1];
        }

        const suffixes = new Array(nums.length).fill(1);
        for (let i = nums.length - 2; i >= 0; i--) {
            suffixes[i] = nums[i + 1] * suffixes[i + 1];
        }

        const result: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(prefixes[i] * suffixes[i]);
        }

        return result;
    }
}
