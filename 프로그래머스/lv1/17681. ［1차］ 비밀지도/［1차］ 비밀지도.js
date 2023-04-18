function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        let current = [...(arr1[i] | arr2[i]).toString(2)].map((v) => {
            if(v === '1') return '#';
            else return ' ';
        }).join('');
        
        answer.push(' '.repeat(n - current.length) + current);
    }
    
    return answer;
}