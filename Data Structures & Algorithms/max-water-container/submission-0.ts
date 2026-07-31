class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;

        // Brute force
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const width = j - i;
                const height = Math.min(heights[i], heights[j]);
                const currentArea = width * height;

                area = Math.max(area, currentArea);
            }
        }

        return area;
    }
}
