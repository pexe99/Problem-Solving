function solution(e, starts) {
    const divisorCount = new Array(e + 1).fill(0);

    // 1부터 e까지의 모든 약수 개수 미리 계산
    for (let i = 1; i <= e; i++) {
        for (let j = i; j <= e; j += i) {
            divisorCount[j]++;
        }
    }

    let number = 0, maximum = 0;
    const result = new Array(e + 1);
    for (let i = e; i > 0; i--) {
        if (divisorCount[i] >= maximum) {
            number = i;
            maximum = divisorCount[i];
        }
        result[i] = number;
    }

    return starts.map(start => result[start]);
}
