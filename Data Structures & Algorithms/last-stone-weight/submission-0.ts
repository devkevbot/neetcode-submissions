class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        // Create a max heap
        // Insert stones into max heap
        //
        // While len(stones) > 1, pop two stones and smash
        //
        // if 1 stone left, return it, else return 0

        const pq = new MaxPriorityQueue();

        for (const s of stones) {
            pq.push(s);
        }

        while (pq.size() > 1) {
            const x = pq.pop();
            const y = pq.pop();

            if (x === y) continue;

            if (x > y) {
                pq.push(x - y);
            } else {
                pq.push(y - x);
            }
        }

        return pq.front() ?? 0;
    }
}
