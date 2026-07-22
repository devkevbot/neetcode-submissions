class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // 1. Init map that stores number -> index of number
        // 2. For each (num, index) in nums:
        //    - Compute the diff between target and num
        //    - If diff is in map, fetch index and return
        //    - Insert (num, index) into the map

        const numByIndex = new Map<number, number>();

        for (const [index, num] of nums.entries()) {
            const diff = target - num;

            if (numByIndex.has(diff)) {
                const storedIndex = numByIndex.get(diff);
                return [storedIndex, index];
            }

            numByIndex.set(num, index);
        }

        return [];
    }
}
