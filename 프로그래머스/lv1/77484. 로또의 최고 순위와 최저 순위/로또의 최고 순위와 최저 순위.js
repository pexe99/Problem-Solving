function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let zeroCounter = 0, correct = 0;
    lottos.forEach((v) => {
        if(v === 0) zeroCounter++;
        else if(win_nums.includes(v)) correct++;
    });
    return [rank[correct + zeroCounter], rank[correct]];
}