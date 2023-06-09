function solution(babbling) {
    let result = 0;
    const regex = /^(aya|ye|woo|ma)+$/;
    babbling.forEach((v) => {
        if(regex.test(v)) result++;
    });
    return result;
}