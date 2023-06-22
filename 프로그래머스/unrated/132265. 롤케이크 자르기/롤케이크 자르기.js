function solution(topping) {
    let first = [], firstSet = new Set();
    topping.forEach((v) => {
        firstSet.add(v);
        first.push(firstSet.size);
    });
    
    topping.reverse();
    
    let second = [], secondSet = new Set();
    topping.forEach((v) => {
        secondSet.add(v);
        second.push(secondSet.size);
    });
    second.reverse();
    
    let counter = 0;
    for(let i = 0; i < first.length - 1; i++) {
        if(first[i] === second[i + 1]) counter++;
    }
    
    return counter;
}