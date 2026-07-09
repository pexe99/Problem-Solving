const FILE = '#';

const solution = (wallpaper) => {
    let [lux, luy, rdx, rdy] = [Infinity, Infinity, 0, 0];
    
    wallpaper.forEach((row, x) => {
        const minY = row.indexOf(FILE);
        const maxY = row.lastIndexOf(FILE);
        if(minY !== -1) {
            lux = Math.min(lux, x);
            luy = Math.min(luy, minY);
            rdx = Math.max(rdx, x);
            rdy = Math.max(rdy, maxY);
        }
    });
    
    return [lux, luy, rdx + 1, rdy + 1];
}