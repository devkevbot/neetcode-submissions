class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const pq = new MaxPriorityQueue();

        for (const n of nums) {
            pq.push(n);
        }

        return pq.toArray().at(k - 1);
    }
}
