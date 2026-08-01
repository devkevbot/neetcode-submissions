class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private pq: any;
    private k: number;

    constructor(k: number, nums: number[]) {
        this.pq = new MinPriorityQueue();
        this.k = k;

        for (const n of nums) {
            this.pq.enqueue(n);
        }

        while (this.pq.size() > this.k) {
            this.pq.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.pq.enqueue(val);

        if (this.pq.size() > this.k) {
            this.pq.dequeue();
        }

        return this.pq.front();
    }
}
