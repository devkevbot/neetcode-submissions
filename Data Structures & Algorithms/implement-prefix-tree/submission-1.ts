class PrefixTree {
    private root;

    constructor() {
        const root = {
            children: {},
            isWord: false,
        };
        this.root = root;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let c = word[i];

            if (!(c in current.children)) {
                current.children[c] = {children: {}, isWord: false};
            }

            current = current.children[c];
        }

        current.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root;

        for (const c of word) {
            if (!(c in current.children)) return false;

            current = current.children[c];
        }

        return current.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let current = this.root;

        for (const c of prefix) {
            if (!(c in current.children)) return false;

            current = current = current.children[c];
        }

        return true;
    }
}
