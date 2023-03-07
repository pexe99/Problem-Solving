function solution(my_string) {
    return [...my_string].map((cur) => {
        if(1 <= parseInt(cur) && parseInt(cur) <= 9) {
            console.log(cur);
            return parseInt(cur);
        }
        else return 0;
    }).reduce((cur, sum) => sum += cur);
}