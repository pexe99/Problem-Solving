function solution(today, terms, privacies) {
    const type = {};
    let result = [];
    terms.forEach((v) => {
        v = v.split(' ');
        type[v[0]] = +v[1];
    });
    
    privacies.forEach((v, i) => {
        v = v.split(' ');
        if(checkTerm(type[v[1]], today, v[0])) result.push(i + 1);
    });
    
    return result;
}

function checkTerm(duration, current, when) {
    let [curYear, curMonth, curDate] = current.split('.').map((v) => +v);
    let [year, month, date] = when.split('.').map((v) => +v);
    
    curDate -= date
    if(curDate < 0) {
        curMonth--;
        curDate += 28;
    }
    curMonth -= month
    if(curMonth <= 0) {
        curYear--;
        curMonth += 12;
    }
    curYear -= year;
    
    if(curYear * 12 + curMonth >= duration) return true;
    return false;
}