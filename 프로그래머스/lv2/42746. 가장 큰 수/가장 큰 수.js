function solution(numbers) {
    let result = numbers.map((v) => v.toString()).sort((a, b) => {
        if(+`${a}${b}` > +`${b}${a}`) return -1;
        if(+`${a}${b}` < +`${b}${a}`) return 1;
    }).join('');
    
    return result[0] !== '0' ? result : '0';
}