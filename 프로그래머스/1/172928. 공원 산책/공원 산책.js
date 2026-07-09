const op = {
    'N': [-1, 0],
    'S': [1, 0],
    'W': [0, -1],
    'E': [0, 1],
};

const solution = (park, routes) => {
    let dog = [0, 0];
    const n = park.length;
    const m = park[0].length;
    
    for(let x = 0; x < n; x++) {
        const y = park[x].indexOf('S');
        if(y !== -1) {
            dog = [x, y];
            break;
        }
    }
    
    routes.forEach((command) => {
        const [way, far] = command.split(' ');
        let [nx, ny] = [...dog], isAvailable = true;
        for(let i = 0; i < +far; i++) {
            [nx, ny] = [nx + op[way][0], ny + op[way][1]];
            if(!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') {
                isAvailable = false;
                break;
            }
        }
        if(isAvailable) dog = [nx, ny];
    });
    
    return dog;
}