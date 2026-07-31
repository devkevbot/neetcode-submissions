class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const dist = Array(n).fill(Infinity);
        dist[k - 1] = 0;

        const adj = {};
        for (let i = 1; i <= n; i++) {
            adj[i] = [];
        }
        for (const [src, dst, t] of times) {
            adj[src].push([dst, t]);
        }

        const pq = new MinPriorityQueue((val) => val[1]);
        pq.enqueue([k, dist[k - 1]]);

        const seen = new Set<number>();

        while (pq.size() > 0) {
            const [src, w] = pq.dequeue();
            if (seen.has(src)) continue;

            for (const [dst, t] of adj[src]) {
                dist[dst - 1] = Math.min(dist[dst - 1], w + t);
                pq.enqueue([dst, dist[dst - 1]]);
            }

            seen.add(src);
        }

        if (dist.includes(Infinity)) {
            return -1;
        } else {
            return Math.max(...dist);
        }
    }
}
