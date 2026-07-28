class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let prev = 2;
        let prevprev = 1;

        if (n === 1) return 1;
        if (n === 2) return 2;
 
        for (let i = 3; i <= n; i++) {
            let result = prev + prevprev;
            [prev, prevprev] = [result, prev]
        }

        return prev;
    }
}
