const op = {N : [-1, 0], S : [1, 0], W : [0, -1], E : [0, 1]};

function solution(park, routes) {
    const H = park.length, W = park[0].length;
    let dog = [0, 0];
    park.forEach((row, index) => {
        if(row.indexOf('S') !== -1) dog = [index, row.indexOf('S')];
    });

    for (let route of routes) {
        const [way, far] = route.split(" ");
        let ny = dog[0], nx = dog[1], flag = true;
        for (let i = 0; i < far; i++) {
            ny += op[way][0];
            nx += op[way][1];
            if (
                ny < 0 || ny >= H ||
                nx < 0 || nx >= W ||
                park[ny][nx] === 'X'
            ) {
                flag = false;
                break;
            }
        }
        if (flag) dog = [ny, nx];
    }

    return dog;
}
