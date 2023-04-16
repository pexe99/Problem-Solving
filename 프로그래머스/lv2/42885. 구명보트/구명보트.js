function solution(people, limit) {
    let counter = 0;
    people.sort((a, b) => a - b);
    
    while(people.length) {
        let current = people.pop();
        if(current + people[0] <= limit) people.shift();
        counter++;
    }
    
    return counter;
}