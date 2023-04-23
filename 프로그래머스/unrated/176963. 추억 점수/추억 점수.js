function solution(name, yearning, photo) {
    const score = Object.fromEntries(name.map((v, idx) => [v, yearning[idx]]));
    
    return photo.map((v) => v.reduce((s, c) => score[c] ? s + score[c] : s, 0));
}