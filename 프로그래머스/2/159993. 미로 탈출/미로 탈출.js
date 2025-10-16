/*
category: DFS/BFS

[input]
- maps: 시작 지점이 'S', 도착 지점이 'E', 레버가 'L'로 주어짐
        벽은 'X', 이동 가능한 통로는 'O'인 1차원 배열 미로

[result]
- 출구로 나가기 위해서는 레버를 당겨야 함
- 따라서 레버로 가는 최단 거리 + 레버에서 출구로 가는 최단 거리가 결과값
- 레버로, 혹은 출구로 도달하지 못하는 경우에는 -1을 반환
*/

const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const pos = {
        start: null,
        end: null,
        lever: null,
    };
    
    maps = maps.map((string, x) => {
        return string.split("").map((value, y) => {
            if(value === 'S') pos.start = [x, y];
            if(value === 'E') pos.end = [x, y];
            if(value === 'L') pos.lever = [x, y];
            return value;
        });
    });
    
    const isAvailable = (x, y, visited) => {
        return 0 <= x && x < n && 0 <= y && y < m 
                && maps[x][y] !== 'X' && !visited[x][y];
    }
    
    const getShortPath = ([fromX, fromY], [toX, toY]) => {
        let result = Infinity;
        const visited = Array.from({length: n}, () => {
            return Array.from({length: m}, () => false);
        });
        
        const queue = [[fromX, fromY, 0]];
        visited[fromX][fromY] = true;
        
        while(queue.length && result === Infinity) {
            const [x, y, dist] = queue.shift();
            DIRECTIONS.forEach(([dx, dy]) => {
                const [nx, ny] = [x + dx, y + dy];
                if(isAvailable(nx, ny, visited)) {
                    if(nx === toX && ny === toY)
                        result = dist + 1;
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            });
        }
            
        return result;
    }
    
    const answer = getShortPath(pos.start, pos.lever)
                    + getShortPath(pos.lever, pos.end);
    return answer === Infinity ? -1 : answer;
}