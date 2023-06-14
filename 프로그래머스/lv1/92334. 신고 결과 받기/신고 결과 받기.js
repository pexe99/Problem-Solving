function solution(id_list, report, k) {
    const reportCounter = {}, mail = {};
    id_list.forEach((name) => {
        reportCounter[name] = [];
        mail[name] = 0;
    });
    [...new Set(report)].forEach((v) => {
        let [reporter, reported] = v.split(' ');
        reportCounter[reported].push(reporter);
    });
    
    for(let reported in reportCounter) {
        let current = reportCounter[reported];
        if(current.length >= k) current.forEach((v) => mail[v]++);
    }
    
    return Object.values(mail);
}