function solution(my_string) {
    return my_string.split(/\D+/).reduce((sum, cur) => sum + Number(cur), 0);
}