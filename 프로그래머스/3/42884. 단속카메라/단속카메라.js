function solution(routes) {
    routes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let area = [routes[0]];
    routes.slice(1).forEach(([curStart, curEnd]) => {
        let [start, end] = area.at(-1);
        if(start <= curStart && curStart <= end) {
            area[area.length - 1] = [start, curEnd < end ? curEnd : end];
        } else {
            area.push([curStart, curEnd]);
        }
    });
    return area.length;
}