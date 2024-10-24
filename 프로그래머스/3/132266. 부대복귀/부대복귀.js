class Heap {
    constructor() {
        this.outstack = [];
        this.instack = [];
    }
    
    enqueue(value) {
        this.instack.push(value);
    }
    
    dequeue() {
        if(this.outstack.length === 0) {
            while(this.instack.length) {
                this.outstack.push(this.instack.pop());
            }
        }
        return this.outstack.pop();
    }
    
    length() {
        return this.instack.length + this.outstack.length;
    }
}

function solution(n, roads, sources, destination) {
    const graph = {};
    roads.forEach(([a, b]) => {
        graph[a] = (graph[a] || []).concat(b);
        graph[b] = (graph[b] || []).concat(a);
    });
    const distance = Array.from({length: n + 1}, (_, index) => Infinity);
    
    const BFS = (start) => {
        const queue = new Heap();
        queue.enqueue(start);
        distance[start] = 0;
        while(queue.length()) {
            let current = queue.dequeue();
            graph[current].forEach((next) => {
                if(distance[next] !== Infinity) {
                    distance[next] = Math.min(distance[next], distance[current] + 1);
                } else {
                    distance[next] = distance[current] + 1;
                    queue.enqueue(next);
                }
            })
        }
    }
    
    BFS(destination);
    return sources.map((current) => distance[current] === Infinity ? -1 : distance[current]);
}