class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            area = Math.max(area, this.calcArea(l, r, heights));

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return area;
    }

    private calcArea(index1: number, index2: number, heights: number[]): number {
        const width = index2 - index1;
        const height = Math.min(heights[index1], heights[index2]);
        const currentArea = width * height;
        return currentArea;
    }
}
