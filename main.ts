const isValid = (s: string): boolean => {
    // ここにコードを書いてください
    const stack: string[] = [];
    
    const map: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // 閉じカッコがきた際topと矛盾している場合それは条件を満たさない
    for (let c of s) {
        if (map[c]) {
            stack.push(map[c]);
        } else if (stack.length === 0 || stack.pop() !== c) {
            return false;
        }
    }
    
    // すべての開きカッコに対応する閉じカッコがあった場合、stackは空になる
    // もしstackに何か残っている場合は条件を満たさない
    return stack.length === 0;
};

let s = '()';
console.log(isValid(s)); // true

s = '({)}'
console.log(isValid(s)); // false