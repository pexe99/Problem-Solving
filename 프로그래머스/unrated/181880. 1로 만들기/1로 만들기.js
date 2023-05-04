function solution(num_list) {
    return num_list.reduce((r, v) => r + v.toString(2).length - 1, 0);
}