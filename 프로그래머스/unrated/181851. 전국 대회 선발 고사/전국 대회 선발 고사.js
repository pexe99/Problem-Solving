function solution(rank, attendance) {
    let canJoin = rank.map((v, i) => [i, v, attendance[i]]).filter((v) => v[2]);
    canJoin.sort((a, b) => a[1] - b[1]);
    return 10000 * canJoin[0][0] + 100 * canJoin[1][0] + canJoin[2][0];
}