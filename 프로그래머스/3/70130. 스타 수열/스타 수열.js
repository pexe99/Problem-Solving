function solution(a) {
    const starSequence = {};
    new Set(a).forEach((key) => starSequence[key] = {index: -1, stack: []});
    for(let i = 1; i < a.length; i++) {
        let [first, second] = [a[i - 1], a[i]];
        if(first !== second) {
            if(starSequence[first].index < i - 1) {
                starSequence[first].index = i;
                starSequence[first].stack.push([first, second]);
            }
            if(starSequence[second].index < i - 1) {
                starSequence[second].index = i;
                starSequence[second].stack.push([first, second]);
            }
        }
    }
    let star = Object.keys(starSequence)
        .sort((a, b) => starSequence[b].stack.length - starSequence[a].stack.length)[0];
    return starSequence[star].stack.length * 2;
}