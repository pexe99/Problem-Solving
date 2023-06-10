function solution(dots) {
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    const slope12 = (y1 - y2) / (x1 - x2);
    const slope13 = (y1 - y3) / (x1 - x3);
    const slope14 = (y1 - y4) / (x1 - x4);
    const slope23 = (y2 - y3) / (x2 - x3);
    const slope24 = (y2 - y4) / (x2 - x4);
    const slope34 = (y3 - y4) / (x3 - x4);
    
    if(slope12 === slope34 || slope13 === slope24 || slope14 === slope23) return 1;
    return 0;
}