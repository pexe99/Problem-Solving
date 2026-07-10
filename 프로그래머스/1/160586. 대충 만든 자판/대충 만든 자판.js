const solution = (keymap, targets) => {
    const key = {};
    for(const str of keymap) {
        for(let i = 0; i < str.length; i++)
            key[str[i]] = Math.min((key[str[i]] || Infinity), i + 1);
    }
    
    return targets.map((target) => {
        let result = 0;
        for(let i = 0; i < target.length; i++) {
            if(!key[target[i]]) return -1;
            result += key[target[i]];
        }
        return result;
    });
}