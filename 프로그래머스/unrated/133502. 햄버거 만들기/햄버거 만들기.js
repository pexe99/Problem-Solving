function solution(ingredient) {
    let result = 0, stack = [];
    ingredient.forEach((v) => {
        stack.push(v);
        if(stack[stack.length - 1] === 1
          && stack[stack.length - 2] === 3
          && stack[stack.length - 3] === 2
          && stack[stack.length - 4] === 1) {
            stack.pop(); stack.pop(); stack.pop(); stack.pop();
            result++;
        }
    })
    return result;
}