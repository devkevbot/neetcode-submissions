class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);

        const stack: {temp: number, index: number}[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && stack.at(-1).temp < temperatures[i]) {
                const stackValue = stack.pop();
                result[stackValue.index] = i - stackValue.index;
            }
            stack.push({temp: temperatures[i], index: i});
        } 

        return result;
    }
}
