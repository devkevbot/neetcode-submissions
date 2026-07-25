class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return "";

        return strs.map((str) => {
            return JSON.stringify({content: str})
        }).join("\n")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) return [];

        return str.split("\n").map((obj) => JSON.parse(obj).content);
    }
}
