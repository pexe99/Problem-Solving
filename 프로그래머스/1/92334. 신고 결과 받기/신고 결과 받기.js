function solution(id_list, report, k) {
    const n = id_list.length;
    
    const id_index = {};
    const resultMail = new Array(n).fill(0);
    const reportList = Array.from({length: n}, () => new Set());
    id_list.forEach((id, index) => id_index[id] = index);
    
    report.forEach((string) => {
        const [from, to] = string.split(' ');
        reportList[id_index[to]].add(from);
    });
    
    id_list.forEach((id) => {
        if(k <= reportList[id_index[id]].size) {
            [...reportList[id_index[id]]].forEach((from) => {
                resultMail[id_index[from]]++;
            });
        }
    });
    
    return resultMail;
}