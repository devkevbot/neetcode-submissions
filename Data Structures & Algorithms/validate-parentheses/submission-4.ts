class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // 1. Create a stack to store open brackets
        //    a. Create look-up tables for brackets
        // 2. Iterate through the input string
        //  a) If an open bracket is encountered, push it to the stack
        //  b) If a closed bracket is encountered:
        //      i) If stack is empty -> return false
        //      ii) Pop from stack -> if no match -> return false
        // 3. Once done iterating, return stack is empty

        // Let n = length of input string
        // Time: O(n)
        // Space: O(n)

        const stack: Array<string> = [];

        const openBrackets = new Set(["{", "[", "("]);
        const bracketPairs = new Map([
            ["}", "{"],
            ["]", "["],
            [")", "("],
        ]);

        for (const c of s) {
            if (openBrackets.has(c)) {
                stack.push(c);
            } else {
                if (stack.length === 0) return false;

                const expected = bracketPairs.get(c);
                const actual = stack.pop();

                if (expected !== actual) return false;
            }
        }

        return stack.length === 0;
    }
}
