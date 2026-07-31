class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adj = {};
        for (let i = 1; i <= n; i++) {
            adj[i] = [];
        }
        for (const [src, dst, t] of times) {
            adj[src].push([dst, t]);
        }

        const pq = new MinPriorityQueue((val) => val[1]);
        pq.enqueue([k, 0]);

        const seen = new Set<number>();

        let t = 0;

        while (pq.size() > 0) {
            const [src, t1] = pq.dequeue();
            if (seen.has(src)) continue;
            seen.add(src);

            t = t1;

            for (const [dst, t2] of adj[src]) {
                pq.enqueue([dst, t1 + t2]);
            }
        }

        return seen.size === n ? t : -1;
    }
}
