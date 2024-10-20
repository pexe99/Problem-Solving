function solution(s) {
    return s.map((current) => {
        let result = "";
        while (true) {
            let counter = 0;
            let array = [...current].reduce((acc, cur) => {
                if(cur === '0' && acc.length >= 2 && acc.at(-1) + acc.at(-2) === '11') {
                    acc.pop();
                    acc.pop();
                    counter++;
                } else acc.push(cur);
                return acc;
            }, [])
            let next = array.join("");
            let insertIndex = 0;
            for (let i = next.length - 1; i >= 0; i--) {
                if (next[i] === '0') {
                    insertIndex = i + 1;
                    break;
                }
            }
            next = next.substring(0, insertIndex) + "110".repeat(counter) + next.substring(insertIndex);
            if (current === next) break;
            current = next;
        }
        return current;
    });
}
