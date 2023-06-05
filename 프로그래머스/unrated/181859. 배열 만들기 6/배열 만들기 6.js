function solution(arr) {
    let stk = [], i = 0;
    while(arr.length > i) {
        if(stk.at(-1) === arr[i]) {
            stk.pop();
            i++;
        }
        else {
            stk.push(arr[i]);
            i++;
        }
    }
    return stk.length ? stk : [-1];
}