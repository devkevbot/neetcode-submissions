class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // Create a max heap
        // For each point
        //  calculate the distance and store [coords, distance] onto the heap
        // if heap is > k then pop from heap

        const pq = new MaxPriorityQueue((value) => value[1]);

        for (const [x, y] of points) {
            const dist = Math.sqrt(x * x + y * y);
            pq.push([[x,y], dist])
        }

        while (pq.size() > k) {
            pq.pop();
        }

        return pq.toArray().map((val) => val[0]);
    }
}
