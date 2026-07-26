class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // Time: O(n log n)
        // Space: O(n)
        const cars = new Array(position.length);
        for (let i = 0; i < position.length; i++) {
            cars[i] = { position: position[i], speed: speed[i] };
        }
        cars.sort((a, b) => b.position - a.position);

        const stack = [];

        for (const { position, speed } of cars) {
            const currentCarTravelTime = (target - position) / speed;

            if (stack.length > 0) {
                const fleetAheadTravelTime = stack.at(-1);
                if (currentCarTravelTime > fleetAheadTravelTime) {
                    stack.push(currentCarTravelTime);
                }
            } else {
                stack.push(currentCarTravelTime);
            }
        }

        return stack.length;
    }
}
