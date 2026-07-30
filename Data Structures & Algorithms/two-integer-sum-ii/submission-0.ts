class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // Initial thoughts:
        // Start at index = 0
        // Compute target - number[0] to find the search target
        // Since elements are sorted, we perform binary search on the remaining elements

        for (let i = 0; i < numbers.length; i++) {
            const searchTarget = target - numbers[i];

            // Search range [i + 1, numbers.length - 1];
            let l = i + 1;
            let r = numbers.length - 1;

            while (l <= r) {
                const mid = Math.floor((l + r) / 2);
                const midValue = numbers[mid];

                if (midValue < searchTarget) {
                    l = mid + 1;
                } else if (midValue > searchTarget) {
                    r = mid - 1;
                } else {
                    return [i + 1, mid + 1]
                }
            }
        }
    }
}
