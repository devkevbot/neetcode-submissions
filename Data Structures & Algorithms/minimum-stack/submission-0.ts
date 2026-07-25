class MinStack {
    private valueStack: number[];
    private minStack: number[];

    constructor() {
        // Two-stack approach:
        // Stack one: holds values
        // Stack two: holds min values seen so far
        // When pushing:
        // - Push value to stack one
        // - Push min(value, seenMin) to stack two
        // When popping:
        // - Pop value from stack one
        // - Pop value from stack two
        // [1 2 0]
        // Stack one: [1, 2, 0]
        // Stack two: [1, 1, 0]
        // [4, 1, 7, 2, 1]
        // Stack one: [4, 1, 7, 2, 1]
        // Stack two: [4, 1, 1, 1, 1]
        this.valueStack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.valueStack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            this.minStack.push(Math.min(val, this.minStack.at(-1)));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.valueStack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.valueStack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
