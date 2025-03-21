function solution(m, n, puddles) {
    //인덱스를 헷갈리지 않기 위해 한칸씩 더 캐시를 만들어줌.
    const cache = Array(n+1).fill(0).map(row => Array(m+1).fill(0));
    //물에 잠긴 지역은 -1로 업데이트
    puddles.forEach(pud => {
        const [a, b] = pud;
        cache[b][a] = -1;
    })

    //일단 집에서부터 출발하니까 cache에서 집 위치를 1로 설정
    cache[1][1] = 1;

    //row, col 순으로 반복문 중첩
    for(let row=1; row<=n; row++) {
        for(let col=1; col<=m; col++) {
            if(row == 1 && col == 1) continue;
            if(cache[row][col] == -1) continue;
            let value = 0;
            //왼쪽이 웅덩이가 아닐때
            if(cache[row][col-1] !== -1) value += cache[row][col-1]
            //위쪽이 웅덩이가 아닐때
            if(cache[row-1][col] !== -1) value += cache[row-1][col]

            cache[row][col] += value % 1000000007;
        }
    }

    //cache에서 학교 위치를 반환
    return cache[n][m] % 1000000007;
}