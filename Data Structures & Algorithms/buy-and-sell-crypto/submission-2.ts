class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Sliding window approach
        //
        // 1. Initialize bestProfit = 0
        // 2. Start with left = 0, right = 1
        // 3. while left and right in bounds:
        //    a. calculate profit: value[right] - value[left]
        //    b. record bestProfit = max(profit, bestProfit)
        //    c. if profit is non-negative, increment right bounds
        //    d. else left = right and right + 1
        // 4. return bestProfit
        //
        // Let n = # of prices
        // Time: O(n)
        // Space: O(1)
        //
        //
        let bestProfit = 0;

        let left = 0;
        let right = 1;

        while (left < prices.length && right < prices.length) {
            const profit = prices[right] - prices[left];
            bestProfit = Math.max(profit, bestProfit);

            if (profit < 0) {
                left = right;
            }

            right++;
        }

        return bestProfit;
    }
}
