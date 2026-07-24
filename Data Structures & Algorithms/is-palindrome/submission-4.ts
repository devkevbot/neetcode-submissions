class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // 1. Pre-process the string to:
        //   a) remove non-alphanumeric characters
        //   b) convert to lowercase
        // 2. two points, one at start, one at end, walk inwards until they cross
        //   a) if the values at the two points is not equal then return false
        // 3. return true

        // Let n = length of input string
        // Time: O(n)
        // Space: O(n)

        const refined = s.split("")
                        .filter((c) => /[a-zA-Z0-9]/.test(c))
                        .map((c) => c.toLowerCase());
        
        let start = 0;
        let end = refined.length - 1;

        while (start < end) {
            if (refined[start] !== refined[end]) return false;
            start++;
            end--;
        }

        return true;
    }
}
