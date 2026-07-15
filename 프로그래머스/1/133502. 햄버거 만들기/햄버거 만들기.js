function solution(ingredient) {
    const stack = [];
    let counter = 0;
    for(let cur of ingredient) {
        stack.push(cur);
        if(stack.at(-1) === 1 &&
          stack.at(-2) === 3 &&
          stack.at(-3) === 2 &&
          stack.at(-4) === 1) {
            for(let i = 0; i < 4; i++) stack.pop();
            counter++;
        }
    }
    return counter;
}