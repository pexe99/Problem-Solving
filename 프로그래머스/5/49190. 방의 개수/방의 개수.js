const DIRECTIONS = [[-1 ,0], [-1, 1], [0, 1], [1, 1], 
       [1, 0], [1, -1], [0, -1], [-1 ,-1]];

function solution(arrows) {
    const visited = {'0:0': 1};
    const lines = new Set();
    let [x, y] = [0, 0];
    arrows.forEach((next) => {
        let [dx, dy] = DIRECTIONS[next];
        for(let i = 0; i < 2; i++) {
            let [nx, ny] = [x + dx, y + dy];
            let dot = [nx, ny].join(":");
            let line = [[x, y], [nx, ny]]
                .sort((a, b) => a[0] - b[0] || a[1] - b[1])
                .map((array) => array.join(":")).join(">");
            if(!lines.has(line)) {
                visited[dot] = (visited[dot] || 0) + 1;
                lines.add(line);
            }
            [x, y] = [nx, ny];
        }
    });
    return Object.values(visited).reduce((acc, cur) => acc + cur - 1, 0);
}