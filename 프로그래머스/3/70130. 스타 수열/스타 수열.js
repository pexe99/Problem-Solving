function solution(a) {
    if(a.length < 2) return 0;
    let starSequence = {};
    new Set(a).forEach((key) => starSequence[key] = {index: -1, len: 0});
    for(let i = 1; i < a.length; i++) {
        let [first, second] = [a[i - 1], a[i]];
        if(first !== second) {
            if(starSequence[first].index < i - 1) {
                starSequence[first].index = i;
                starSequence[first].len++;
            }
            if(starSequence[second].index < i - 1) {
                starSequence[second].index = i;
                starSequence[second].len++;
            }
        }
    }
    let result = 0;
    Object.values(starSequence).forEach((cur) => result = Math.max(result, cur.len));
    return result * 2;
}
