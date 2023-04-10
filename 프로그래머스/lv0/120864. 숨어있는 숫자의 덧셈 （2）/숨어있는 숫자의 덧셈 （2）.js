function solution(my_string) {
    return my_string.split(/\D+/).reduce((cur, sum) => Number(sum) + Number(cur), 0);
}