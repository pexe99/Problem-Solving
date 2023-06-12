function solution(today, terms, privacies) {
    const type = {};
    const [curYear, curMonth, curDate] = today.split('.').map(Number);
    const current = curYear * 12 * 28 + curMonth * 28 + curDate;
    terms.forEach((v) => {
        v = v.split(' ');
        type[v[0]] = +v[1];
    });
    
    let result = [];
    privacies.forEach((v, i) => {
        v = v.split(' ');
        let [year, month, date] = v[0].split('.').map(Number);
        let duration = year * 12 * 28 + month * 28 + date + type[v[1]] * 28;
        if(duration <= current) result.push(i + 1);
    });
    
    return result;
}