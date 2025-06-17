const isValid = (s: string): boolean => {
    // ここにコードを書いてください
    const stack: string[] = [];
    
    const map: { [key: string]: string} = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let c of s) {
        if (map[c]) {
            stack.push(map[c]);
        } else if (stack.length === 0 || stack.pop() !== c) {
            return false;
        }
    }
    
    return stack.length === 0;
};

let s = '()';
console.log(isValid(s)); // true

s = '({)}'
console.log(isValid(s)); // false