function solution(s, skip, index) {
    let alpha = new Array(26).fill(true);
    [...skip].forEach((v) => alpha[v.charCodeAt() - 97] = false);
    
    return [...s].map((v) => {
        let current = v.charCodeAt() - 97;
        for(let i = 0; i < index; i++) {
            current = (current + 1) % 26;
            if(!alpha[current]) i--;
        }
        return String.fromCharCode(current % 26 + 97);
    }).join('');
}