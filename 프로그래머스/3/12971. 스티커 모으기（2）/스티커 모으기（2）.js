const getMaxScore = (array) => {
    const DP = Array.from({length: array.length}, (_, idx) => {
        return idx === 0 ? array[idx] : 0;
    });
    for(let i = 1; i < array.length; i++) {
        DP[i] = Math.max(array[i] + (DP[i - 2] || 0), DP[i - 1]);
    }
    return DP.at(-1);
}

function solution(sticker) {
    if(sticker.length === 1) return sticker[0];
    return Math.max(getMaxScore(sticker.slice(0, -1)), getMaxScore(sticker.slice(1)));
}