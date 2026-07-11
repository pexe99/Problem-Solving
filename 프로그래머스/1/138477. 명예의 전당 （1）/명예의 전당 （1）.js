function solution(k, score) {
    const front = [], back = [], result = [];
    for(const s of score) {
        while(front.at(-1) < s)
            back.push(front.pop());
        while(back.length && s < back.at(-1))
            front.push(back.pop());
        front.push(s);
        
        const total = front.length + back.length;
        const target = Math.min(k, total) - 1;
        if (target < front.length) {
            result.push(front[target]);
        } else {
            const backIndex = back.length - 1 - (target - front.length);
            result.push(back[backIndex]);
        }

    }
    return result;
}