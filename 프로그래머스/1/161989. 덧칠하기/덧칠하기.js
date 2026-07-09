function solution(n, m, section) {
    let counter = 0;
    let endPoint = section.at(-1);
    
    while(section.length) {
        endPoint = section.at(-1) - m + 1;
        while(endPoint <= section.at(-1)) section.pop();
        counter++;
    }
    
    return counter;
}