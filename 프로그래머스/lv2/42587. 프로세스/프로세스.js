function solution(priorities, location) {
    let result = 0;
    
    while(priorities.length) {
        const max = Math.max(...priorities);
        const current = priorities.shift();
        if(max === current) {
            result++;
            if(location === 0) return result;
        }
        else priorities.push(current);
        location = (location + priorities.length - 1) % priorities.length;
    }
}