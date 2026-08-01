class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const pq = new MinPriorityQueue();

        for (const n of nums) {
            pq.push(n);

            if (pq.size() > k) {
                pq.pop();
            }
        }

        return pq.front();
    }
}
