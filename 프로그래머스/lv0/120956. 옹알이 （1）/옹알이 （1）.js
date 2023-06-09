function solution(babbling) {
    const babble = ["aya", "ye", "woo", "ma"];
    return babbling.reduce((result, current) => {
        babble.forEach((v) => {
            current = current.split(v).join(',');
        });
        console.log(current);
        return [...current].filter((v) => v !== ',').length ? result : result + 1;
    }, 0);
}