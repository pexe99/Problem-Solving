function solution(num_list, n) {
    return num_list.filter((v, idx) => !(idx % n));
}