function solution(s, skip, index) {
    skip = new Set([...skip]);
    const charIndex = {};
    const charArray = [];
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97 + i);
        if(skip.has(char)) continue;
        charIndex[char] = charArray.length;
        charArray.push(char);
    }
    
    return [...s].map((c) => {
        return charArray[(charIndex[c] + index) % charArray.length];
    }).join('');
}