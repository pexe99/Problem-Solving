function solution(arr) {
    let stk = [], i = 0;
    while(arr.length > i) {
        if(!stk.length) {
            stk.push(arr[i]);
            i++;
        }
        else {
            if(stk.at(-1) < arr[i]) {
                stk.push(arr[i]);
                i++;
            }
            else {
                stk.pop();
            }
        }
    }
    return stk;
}