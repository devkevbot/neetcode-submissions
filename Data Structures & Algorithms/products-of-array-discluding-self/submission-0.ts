class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
       // Brute force:
       //   for each num1 in nums
       //      init product = 0
       //      for each num2 in nums
       //        if num1 != num2 then add num2 to sum
       // assign product to result
       // 
       // Let n = number of elements
       // Time: O(n^2)
       // Space: O(n)

        const result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 1;

            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                product *= nums[j];
            }

            result.push(product);
        }

        return result;
    }
}
