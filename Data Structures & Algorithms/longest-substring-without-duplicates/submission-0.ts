class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // Sliding window:
        //
        // Use set to keep track of what has been seen in the window
        //
        // init left, right edge of window
        // while left and right in bounds:
        //  if elem at right not seen:
                // add elem to seen
                // update max length using (right - left) + 1
        //  else
        //    while left not at elem at right
        //       remove elem at left from seen
        //       increment left
        // increment right

        // return max length

        let l = 0;
        let r = 0;
        let longest = 0;
        const seen = new Set<string>();

        while (l < s.length && r < s.length) {
            if (!seen.has(s[r])) {
                seen.add(s[r]);
                longest = Math.max((r - l) + 1, longest);
            } else {
                while (s[l] !== s[r]) {
                    seen.delete(s[l]);
                    l++;
                }
                l++
            }
            r++;
        }

        return longest;
    }
}
