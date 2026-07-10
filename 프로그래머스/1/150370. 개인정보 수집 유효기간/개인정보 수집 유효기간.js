function solution(today, terms, privacies) {
    const types = {};
    const result = [];
    terms.forEach((term) => {
        const [type, month] = term.split(' ');
        types[type] = +month;
    });
    
    today = new Date(today);
    privacies.forEach((privacy, index) => {
        let [date, type] = privacy.split(' ');
        date = new Date(date);
        date.setMonth(date.getMonth() + types[type]);
        if(date <= today) result.push(index + 1);
    });
    
    return result;
}