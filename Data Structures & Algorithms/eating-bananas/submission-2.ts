class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let minSpeed = Math.max(...piles);

        let l = 1;
        let r = minSpeed;

        // Question: would l <= r also work?
        while (l < r) {
            let k = Math.trunc((l + r) / 2);
            const hours = this.hoursToEat(piles, k);

            // Need to eat faster
            if (hours > h) {
                l = k + 1;
            } else { // Could eat slower
                r = k
                minSpeed = k
            }
        }

        return minSpeed;
    }

    private hoursToEat(piles: number[], speed: number): number {
        const hours = piles.reduce((acc, pile) => {
            return acc + Math.ceil(pile / speed);
        }, 0);

        return hours;
    }
}
