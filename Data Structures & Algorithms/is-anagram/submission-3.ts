class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
       // if length s != length t return false
       // Init map of letters => frequency

       if (s.length !== t.length) return false;

       const freq = new Map<string, number>();

       for (const letter of s) {
        freq[letter] = (freq[letter] ?? 0) + 1;
       }
       for (const letter of t) {
        if (!freq[letter]) return false
        freq[letter] -= 1;
       }

       return [...freq.values()].every((v) => v === 0);
    }
}
