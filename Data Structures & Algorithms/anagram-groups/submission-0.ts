class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // 1. Sort each input string
        // 2. Create map of sorted input => unsorted input
        // 3. Return map.values()

        // Complexity:
        // k = number of strings
        // n = average length of string
        // Time to sort one string  =  n log n
        // Time to sort all strings =  k n log n
        // Space: map = k keys + k values = k

        const map = {};

        for (const unsortedValue of strs) {
            const letters = Array.from(unsortedValue);
            letters.sort();
            const sortedValue = letters.join("");
            if (!(sortedValue in map)) {
                map[sortedValue] = [];
            }
            map[sortedValue].push(unsortedValue);
        }

        return Object.values(map);
    }
}
