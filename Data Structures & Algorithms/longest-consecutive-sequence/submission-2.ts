class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Iterate over each element
        // Store  elements in a set
        // For each element, lookup previous elements in set until element no found, recording length
        //    set longest = max(longest, curr longest)
        //
        // Let n = number of elements in array
        // Time: O(n^2)
        // Space: O(n)

        let longest = 0;
        const seen = new Set<number>(nums);

        for (const n of nums) {
            let currentLongest = 1;

            for (let i = n-1; seen.has(i); i--) {
                currentLongest += 1;
            }

            longest = Math.max(longest, currentLongest);

            seen.add(n);
        }
        
        // [2,20,4,10,3,4,5]
        // 2, longest=1, 1 not in set, continue
        // 20, longest=1, 19 not in set, continue
        // 4, longest=1, 3 not in set, continue
        // 10, longest=1, 9 not in set, continue
        // 3, longest=1, 2 in set, 1 not in set, longest=2
        // 4, longest=2, 3 in set, 2 in set, 1 not in set, longest=3
        // 5, longest=3, 4 in set, 3 in set, 2 in set, 1 not in set, longest=4

        return longest;
    }
}
