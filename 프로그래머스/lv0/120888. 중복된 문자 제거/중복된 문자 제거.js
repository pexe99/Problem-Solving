function solution(my_string) {
    let result = [];
    
    for(cur of [...my_string]) {
        if(!result.includes(cur)) result.push(cur);
    }
    
    return result.join("");
}