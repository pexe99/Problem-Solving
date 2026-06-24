function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let remainDeliveries = 0;
    let remainPickups = 0;
    
    for(let i = n - 1; i >= 0; i--) {
        remainDeliveries += deliveries[i];
        remainPickups += pickups[i];
        
        if(remainDeliveries > 0 || remainPickups > 0) {
            const counter = Math.ceil(Math.max(remainDeliveries, remainPickups) / cap);
            remainDeliveries -= cap * counter;
            remainPickups -= cap * counter;
            answer += (i + 1) * counter * 2;
        }
    }
    
    return answer;
}