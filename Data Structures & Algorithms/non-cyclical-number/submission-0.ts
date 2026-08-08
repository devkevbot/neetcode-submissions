class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        const seen = new Set<number>();

        while (true) {
            if (seen.has(n)) return false;
            if (n === 1) break;
            seen.add(n);

            n = this.getSumOfDigits(n);
        }

        return true;
    }
    
    private getSumOfDigits(n: number): number {
        let sum = 0;

        while (n > 0) {
            const digit = n % 10;
            sum += digit * digit;

            n = Math.floor(n / 10);
        }

        return sum;
    }
}
