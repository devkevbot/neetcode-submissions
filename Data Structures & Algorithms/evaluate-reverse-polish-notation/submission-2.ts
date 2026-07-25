class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        // ["1","2","+","3","*","4","-"]
        // ["1", "2"]
        // "+" => ["3"]
        // ["3", "3"]
        // "*" => ["9"]
        // ["9", "4"]
        // "-" => ["5"]
        // Answer: "5" -> 5
        //
        // Approach:
        // 1. Use an array as a stack
        // 2. Iterate over tokens
        // 2a. if token is number, push it to the stack
        // 2b. if token is an operator
        //     attempt to pop two operators from stack
        // 3. Return last element in stack
        //
        // Let n = # of tokens
        // Time: O(n)
        // Space: O(n)
        const stack: number[] = [];

        // ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

        // [10, 6, 9, 3]
        // [10, 6, 12]
        // [10, 6, 12, -11]
        // [10, 6, -132]
        // [10, 0]
        // [0]
        // [17]
        // [22]

        for (const t of tokens) {
            switch (t) {
                case "+": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first + second);
                    break;
                }
                case "-": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first - second);
                    break;
                }
                case "*": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first * second);
                    break;
                }
                case "/": {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(Math.trunc(first / second));
                    break;
                }
                default:
                    stack.push(Number(t));
            }
        }

        return stack.pop();
    }
}
