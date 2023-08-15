function solution(want, number, discount) {
    let result = 0;
    const wishList = {};
    want.forEach((v, i) => wishList[v] = number[i]);
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const period = discount.slice(i, i + 10);
        const copyList = {...wishList};
        period.forEach((v) => {
            if(v in copyList && copyList[v]) copyList[v]--;
        });
        if(Object.values(copyList).reduce((s, c) => s + c) === 0) result++;
    }
    return result;
}