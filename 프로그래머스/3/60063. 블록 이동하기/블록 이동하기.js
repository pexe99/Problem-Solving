const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

class Deque {
    constructor() {
        this.instack = [];
        this.outstack = [];
    }
    
    enqueue(value) {
        this.instack.push(value);
    }
    
    dequeue(value) {
        if(!this.outstack.length) {
            while(this.instack.length) this.outstack.push(this.instack.pop());
        }
        return this.outstack.pop();
    }
    
    get length() {
        return this.instack.length + this.outstack.length;
    }
}

const getNextPosition = (board, N, visited, [hx, hy], [tx, ty], dist) => {
    const nextPosition = [];
    DIRECTION.forEach(([dx, dy]) => {
        const [nhx, nhy, ntx, nty] = [hx + dx, hy + dy, tx + dx, ty + dy];
        if(board[nhx]?.[nhy] === 0 && board[ntx]?.[nty] === 0)
            nextPosition.push({current: [[nhx, nhy], [ntx, nty]], dist: dist + 1});
    });
    const rotate = [1, -1];
    rotate.forEach((value) => {
        if(hx === tx) {
            const [nhx, nhy, ntx, nty] = [hx + value, hy, tx + value, ty];
            if(board[nhx]?.[nhy] === 0 && board[ntx]?.[nty] === 0) {
                nextPosition.push({current: [[hx, hy], [nhx, hy]], dist: dist + 1});
                nextPosition.push({current: [[ntx, ty], [tx, ty]], dist: dist + 1});
            }
        } else {
            const [nhx, nhy, ntx, nty] = [hx, hy + value, tx, ty + value];
            if(board[nhx]?.[nhy] === 0 && board[ntx]?.[nty] === 0) {
                nextPosition.push({current: [[hx, hy], [hx, nhy]], dist: dist + 1});
                nextPosition.push({current: [[tx, nty], [tx, ty]], dist: dist + 1});
            }
        }
    });
    return nextPosition;
}

const solution = (board) => {
    const N = board.length;
    const queue = new Deque();
    const goal = `${N - 1}`.repeat(2);
    const visited = new Set("0001");
    queue.enqueue({current: [[0, 0], [0, 1]], dist: 0});
    while(queue.length > 0) {
        const {current, dist} = queue.dequeue();
        const [head, tail] = current;
        if(head.join("") === goal || tail.join("") === goal) return dist;
        const nextPosition = getNextPosition(board, N, visited, head, tail, dist);
        for(const next of nextPosition) {
            const position = [...next.current].sort((a, b) => a[0] - b[0] || a[1] - b[1]).join("");
            if(!visited.has(position)) {
                visited.add(position);
                queue.enqueue(next);
            }
        }
    }
}