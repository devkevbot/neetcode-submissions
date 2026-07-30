class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const cache = new Array(cost.length).fill(-1);

        const dfs = (i: number): number => {
            if (i >= cost.length) return 0;

            if (cache[i] !== -1) {
                return cache[i];
            }

            cache[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            return cache[i];

        }

        return Math.min(dfs(0), dfs(1));
    }
}
