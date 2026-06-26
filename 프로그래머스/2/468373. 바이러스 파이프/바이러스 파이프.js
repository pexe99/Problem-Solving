const getPipeSequence = (k) => {
    const sequence = [];
    const pipe = [1, 2, 3];
    const combination = (current) => {
        if(current.length === k) sequence.push(current);
        else {
            pipe.forEach((next) => {
                if(next !== current.at(-1)) combination([...current, next]);
            });
        }
    }
    combination([]);
    return sequence;
}

const getMaxInfection = (graph, sequence, infected) => {
    for(const pipe of sequence) {
        for(let i = 1; i <= infected.length; i++) {
            let index = 0;
            const queue = infected.reduce((acc, cur, idx) => cur ? [...acc, idx] : acc, []);
            while(index < queue.length) {
                const current = queue[index++];
                graph[current][pipe]?.forEach((next) => {
                    if(!infected[next]) {
                        infected[next] = true;
                        queue.push(next);
                    }
                });
            }
        }
    }
                                   
    return infected.reduce((acc, cur) => acc + +cur, 0);
}

const solution = (n, infection, edges, k) => {
    const graph = Array.from({length: n + 1}, () => ({}));
    const infected = Array.from({length: n + 1}, (_, idx) => idx === infection);
    edges.forEach(([from, to, pipe]) => {
        graph[from][pipe] = [...(graph[from]?.[pipe] || []), to];
        graph[to][pipe] = [...(graph[to]?.[pipe] || []), from];
    });
    
    return getPipeSequence(k).reduce((acc, cur) => {
        return Math.max(acc, getMaxInfection(graph, cur, [...infected]));
    }, 0);
}