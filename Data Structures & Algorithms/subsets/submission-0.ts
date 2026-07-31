class Solution {
    private answer: number[][] = [[]];
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        for (let i = 0; i < nums.length; i++) {
            this.helper(nums, i, []);
        }

        return this.answer;
    }

    private helper(nums: number[], index: number, subset: number[]) {
        subset.push(nums[index]);
        this.answer.push(subset);

        for (let i = index + 1; i < nums.length; i++) {
            this.helper(nums, i, subset.slice());
        }
    }
}
