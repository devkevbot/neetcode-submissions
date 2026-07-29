class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        const answer = [];

        let carry = 1;

        for (let i = digits.length - 1; i >= 0; i--) {
            let d = digits[i];
            let sum = d + carry;
            if (sum === 10) {
                carry = 1
                answer.push(0);
            } else {
                carry = 0;
                answer.push(sum);
            }
        }

        if (carry === 1) {
            answer.push(1);
        }

        answer.reverse();
        return answer;
    }
}
