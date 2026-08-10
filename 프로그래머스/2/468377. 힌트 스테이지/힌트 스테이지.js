const solution = (
    cost, 
    hint, 
    stage = 0, 
    curCost = 0, 
    counter = new Array(cost.length).fill(0)
) => {
    const ticket = Math.min(cost.length - 1, counter[stage]);
    if(stage === cost.length - 1)
        return curCost + cost[stage][ticket];
    
    let result = Infinity;
    curCost += cost[stage][ticket];
    result = Math.min(result, solution(cost, hint, stage + 1, curCost, [...counter]));
    
    curCost += hint[stage][0];
    hint[stage].slice(1).forEach((e) => counter[e - 1]++);
    result = Math.min(result, solution(cost, hint, stage + 1, curCost, [...counter]));
    
    return result;
}