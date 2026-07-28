class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let m = new Map<number, number>([[1, 1], [2, 2]]);

        if (n === 0) return 0;
        if (n <= 2) return m.get(n);

        for (let i = 3; i <= n; i++) {
            let result = m.get(i - 1) + m.get(i - 2);
            m.set(i, result);
        }

        return m.get(n);
    }
}
