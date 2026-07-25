class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Initial thoughts:
        //
        // Keep a set for each row, column, and box.
        //
        // Iterate through rows:
        // - If value in column is a number:
        //   - If seen in row's set: return false
        //   - Else: record in row's set
        //
        // Iterate through columns:
        // - If value in row is a number:
        //   - If seen in col's set: return false
        //   - Else: record in col's set
        //
        // Iterate through boxes (not sure how):
        // - If value in (row, col) is a number:
        //  - if seen in box's set: return false
        // -  else: record in box's set
        //
        // return true
        //
        // Let n = side length of board
        // Time: O(n^2)
        // Space: O(n)
        const BOARD_SIDE_LENGTH = 9;

        const rowSets = Array.from({ length: BOARD_SIDE_LENGTH }, () => new Set<string>());
        const colSets = Array.from({ length: BOARD_SIDE_LENGTH }, () => new Set<string>());
        const boxSets = Array.from({ length: BOARD_SIDE_LENGTH }, () => new Set<string>());

        for (let i = 0; i < BOARD_SIDE_LENGTH; i++) {
            for (let j = 0; j < BOARD_SIDE_LENGTH; j++) {
                const value = board[i][j];
                if (value === ".") continue;
                
                if (rowSets[i].has(value)) return false;
                rowSets[i].add(value);

                if (colSets[j].has(value)) return false;
                colSets[j].add(value);

                const boxIndex = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
                if (boxSets[boxIndex].has(value)) return false;
                boxSets[boxIndex].add(value);
            }
        }

        return true;
    }
}
