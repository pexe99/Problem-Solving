function solution(num_list) {
    let oddSum = 0, evenSum = 0;
    num_list.map((v, idx) => idx % 2 ? evenSum += v : oddSum += v);
    return Math.max(oddSum, evenSum);
}