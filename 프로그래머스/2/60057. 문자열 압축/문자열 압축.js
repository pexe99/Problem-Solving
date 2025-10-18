/*
category: 구현

[input]
- s: 최대 길이 1000인 압축 전 문자열

[output]
- 압축해 표현한 문자열 중 가장 짧은 경우의 길이를 반환
*/


function solution(s) {
    let minLen = s.length;
    const maxCut = Math.floor(s.length / 2);
    for(let x = 1; x <= maxCut; x++) {
        let [cut, cnt, len] = ['', 1, 0];
        for(let i = 0; i <= s.length + x; i += x) {
            const cur = s.slice(i, i + x);
            if(cut === cur) {
                cnt++;
                continue;
            }
            if (cnt > 1) {
                len += `${cnt}`.length;
                cnt = 1;
            }
            len += cut.length;
            cut = cur;
        }
        minLen = Math.min(minLen, len);
    }
    
    return minLen;
}