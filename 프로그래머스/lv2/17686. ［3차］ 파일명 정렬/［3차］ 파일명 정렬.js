function solution(files) {
    return files.sort((a, b) => {
        // 처음으로 나오는 숫자 부분을 최대 길이 5로 slice
        let numberA = a.match(/\d+/g)[0].slice(0, 5);
        let numberB = b.match(/\d+/g)[0].slice(0, 5);
        // 해당 숫자를 기준으로 split하여 HEAD를 구하여 저장
        let headA = a.split(numberA)[0].toLowerCase();
        let headB = b.split(numberB)[0].toLowerCase();
        // 다중 조건 정렬
        return headA.localeCompare(headB) || +numberA - +numberB;
    })
}