function solution(num_str) {
    return [...num_str].reduce((sum, v) => +sum + +v);
}