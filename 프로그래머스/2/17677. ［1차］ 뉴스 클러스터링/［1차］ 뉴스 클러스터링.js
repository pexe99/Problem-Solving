const getGroup = (str) => {
    const pattern = /^[a-z]+$/;
    const group = [];
    for(let i = 0; i < str.length - 1; i++) {
        const current = str.substr(i, 2).toLowerCase();
        if(pattern.test(current) === true) group.push(current);
    }
    return group;
}

const getJaccardSimilarity = (group1, group2) => {
    const set = new Set([...group1, ...group2]);
    let union = 0, intersection = 0;
    set.forEach((item) => {
        const has1 = group1.filter((el) => el === item).length;
        const has2 = group2.filter((el) => el === item).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    });
    return union ? intersection / union : 1;
}

function solution(str1, str2) {
    const group1 = getGroup(str1);
    const group2 = getGroup(str2);
    const result = getJaccardSimilarity(group1, group2);
    return Math.floor(result * 65536);
}