const op = {N : [-1, 0], S : [1, 0], W : [0, -1], E : [0, 1]};

function solution(park, routes) {
    let dog = [0, 0];
    park.forEach((row, index) => {
        if(row.indexOf('S') !== -1) dog = [index, row.indexOf('S')];
    });

    for (let route of routes) {
        const [way, far] = route.split(" ");
        let [nx, ny] = [...dog], flag = true;
        for (let i = 0; i < far; i++) {
            [nx, ny] = [nx + op[way][0], ny + op[way][1]];
            if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') {
                flag = false;
                break;
            }
        }
        if (flag) dog = [nx, ny];
    }

    return dog;
}
