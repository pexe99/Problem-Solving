function solution(info, query) {
    const index = {};
    const addScore = (current, rest, score) => {
        if(rest.length === 0) {
            const key = current.join(">");
            if(index[key]) index[key].push(score);
            else index[key] = [score];
            return;
        }
        addScore([...current, "-"], rest.slice(1), score);
        addScore([...current, rest[0]], rest.slice(1), score);
    }
    
    info.forEach((string) => {
        const current = string.split(" ");
        addScore([], current.slice(0, 4), +current.at(-1));
    });
    
    Object.keys(index).forEach((key) => index[key].sort((a, b) => a - b));
    
    const result = [];
    query.forEach((string) => {
        const current = string.split(" ").filter((e) => e !== "and");
        const key = current.slice(0, 4).join(">");
        const target = +current.at(-1);
        if(!index[key]) {
            result.push(0);
            return;
        }
        
        let [start, end] = [0, index[key].length - 1];
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            if(target <= index[key][mid]) end = mid - 1;
            else start = mid + 1;
        }
        result.push(index[key].length - start);
    });
    return result;
}