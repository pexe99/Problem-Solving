function solution(my_string) {
    let array = my_string.replace(/[a-z]+/gi, " ").split(" ").filter((cur) => cur !== " ");
    if(array.length === 0) return 0;
    else return Number(array.reduce((cur, sum) => sum = Number(sum) + Number(cur)));
}