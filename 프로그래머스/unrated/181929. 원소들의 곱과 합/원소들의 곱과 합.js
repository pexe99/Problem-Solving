function solution(num_list) {
    return Number(num_list.reduce((mul, v) => mul * v) < Math.pow(num_list.reduce((sum, v) => sum + v), 2));
}