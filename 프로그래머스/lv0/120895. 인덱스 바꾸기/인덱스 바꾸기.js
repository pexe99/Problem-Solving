function solution(my_string, num1, num2) {
    let result  = my_string.split("");
    let temp = result[num1];
    result[num1] = result[num2];
    result[num2] = temp;
    return result.join("");
}