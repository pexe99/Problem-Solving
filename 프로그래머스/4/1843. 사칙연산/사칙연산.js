const solution = (arr) => {
    const tails = arr.join('')
                     .split('-')
                     .map((e) => e.split('+').map((e) => +e))
                     .reverse();

    return tails.reduce(([maxTail, minTail], sub, idx) => {
        const minSum = sub.reduce((acc, cur) => acc - cur, 0);
        const maxSum = -minSum - 2 * sub[0];
        
        if(idx === tails.length - 1) {
            return -minSum + maxTail;
        } else {
            let curMax = Math.max(maxSum + maxTail, minSum - minTail);
            let curMin = Math.min(minSum + minTail, minSum - maxTail);
            return [curMax, curMin];
        }
    }, [0, 0]);
}