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
    if(group1.length + group2.length === 0) return 1;
    let intersection = 0;
    let union = group1.length + group2.length;
    const temp = {};
    group1.forEach((str) => temp[str] = (temp[str] || 0) + 1);
    group2.forEach((str) => {
        if(temp[str]) {
            temp[str]--;
            if(!temp[str]) delete temp[str];
            intersection++;
        }
    });
    return intersection / (union - intersection);
}

function solution(str1, str2) {
    const group1 = getGroup(str1);
    const group2 = getGroup(str2);
    const result = getJaccardSimilarity(group1, group2);
    return Math.floor(result * 65536);
}