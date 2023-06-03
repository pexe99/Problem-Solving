function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 };
    const option = { '*': 2, '#': -1, undefined: 1 };

    let games = dartResult.match(/\d\d?.?\D/g);
    games.forEach((v, i) => {
        let current = v.match(/(^\d{1,})(S|D|T)(\*|#)?/);
        let score = Math.pow(current[1], bonus[current[2]]) * option[current[3]];
        if(i >= 1 && current[3] === '*') games[i - 1] *= option['*'];
        games[i] = score;
    })

    return games.reduce((s, v) => s + v);
}