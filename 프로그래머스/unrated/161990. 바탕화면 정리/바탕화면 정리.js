function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [50, 50, 0, 0];
    let x = 0;
    wallpaper.forEach((s) => {
        let y = 0;
        [...s].forEach((i) => {
            if(i === '#') {
                lux = Math.min(lux, x);
                luy = Math.min(luy, y);
                rdx = Math.max(rdx, x);
                rdy = Math.max(rdy, y);
            }
            y++;
        })
        x++;
    });
    return [lux, luy, rdx + 1, rdy + 1];
}