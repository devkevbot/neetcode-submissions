class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    private isAlphaNumeric(s: string): boolean {
        return /[a-zA-Z0-9]/.test(s);
    }

    isPalindrome(s: string): boolean {
        // Let n = length of input string
        // Time: O(n)
        // Space: O(1)

        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            while (start < end && !this.isAlphaNumeric(s[start])) {
                start++;
            }
            while (start < end && !this.isAlphaNumeric(s[end])) {
                end--;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
            start++;
            end--;
        }

        return true;
    }
}
