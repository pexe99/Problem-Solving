function solution(babbling) {
    const regexp = /^(?:(aya|ye|woo|ma)(?!\1))+$/;
    return babbling.filter((word) => regexp.test(word)).length;
}