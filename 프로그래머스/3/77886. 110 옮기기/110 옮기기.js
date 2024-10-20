function solution(s) {
    return s.map((current) => {
        current = [...current]; 
        let counter = 0;
        let next = current.reduce((acc, cur) => {
            if(cur === '0' && acc.length >= 2 && acc.at(-1) + acc.at(-2) === '11') {
                acc.pop();
                acc.pop();
                counter++;
            } else acc.push(cur);
            return acc;
        }, [])
        let insertIndex = 0;
        for (let i = next.length - 1; i >= 0; i--) {
            if (next[i] === '0') {
                insertIndex = i + 1;
                break;
            }
        }
        let poppedString = "110".repeat(counter);
        next = [...next.slice(0, insertIndex), ...poppedString, ...next.slice(insertIndex)];
        return next.join("");
    });
}
