function solution(N, stages) {
    const failureRate = {};
    const curStage = new Array(N + 2).fill(0);
    stages.forEach((stage) => curStage[stage]++);
    for(let i = N; i > 0; i--) {
        const current = curStage[i];
        curStage[i] += curStage[i + 1];
        if(current === 0) failureRate[i] = 0;
        else failureRate[i] = current / curStage[i];
    }
    return [...Object.keys(failureRate)]
        .sort((a, b) => failureRate[b] - failureRate[a])
        .map((e) => +e);
}