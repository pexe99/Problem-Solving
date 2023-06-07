function solution(score) {
    let answer = new Array(score.length).fill(1);
    score.forEach((v, i) => {
        let average = v[0] + v[1];
        score.forEach((cur) => {
            if(average < cur[0] + cur[1]) answer[i]++;
        })
    })
    return answer;
}