const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const checkAvailable = (x, y) => {
    return 0 <= x && x < 5 && 0 <= y && y < 5;
}

const getResult = (place) => {
    const volunteers = [];
    const result = Array.from({length: place.length}, () => {
        return Array.from({length: place[0].length}, () => 0);
    });
    place.forEach((row, x) => {
        [...row].forEach((value, y) => {
            if(value === "P") {
                result[x][y]--;
                DIRECTION.forEach(([dx, dy]) => {
                    const [nx, ny] = [x + dx, y + dy];
                    if(checkAvailable(nx, ny)) result[nx][ny]--;
                });
            } else if(value === "X") result[x][y] = Infinity;
        });
    });

    return result.reduce((acc, row) => {
        return acc && row.filter((e) => e <= -2).length === 0;
    }, true);
}

const solution = (places) => {
    return places.map((place) => +getResult(place));
}