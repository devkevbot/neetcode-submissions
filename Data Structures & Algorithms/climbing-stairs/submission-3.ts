class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
    

        if (n <= 2) return n;

        const prev = [1, 2];
 
        for (let i = 3; i <= n; i++) {
            let result = prev[0] + prev[1];
            [prev[1], prev[0]] = [result, prev[1]]
        }

        return prev[1];
    }
}
