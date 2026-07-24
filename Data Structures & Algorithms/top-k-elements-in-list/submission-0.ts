class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Create map of num => count
        // Create pairs of [num, count] and sort by count desc
        // Return first k counts
        // 
        // Let n = how many numbers

        // O(n) space
        const count: Record<number, number> = {};

        // O(n) time
        for (const n of nums) {
            count[n] = (count[n] ?? 0) + 1;
        }

        // Careful: keys become strings
        const pairs = Object.entries(count);
        // O(m log m)
        pairs.sort((a, b) => b[1] - a[1]);

        const firstKPairs = pairs.slice(0, k);

        const topValues = firstKPairs.map((value) => Number(value[0]));

        return topValues;
    }
}
