function solution(s, n) {
    return [...s].map((cur) => {
        if(cur === " ") return cur;
        else {
            let curASCII = cur.charCodeAt(0);
            if('a' <= cur && cur <= 'z') {
                if(curASCII + n > 122) curASCII -= 26;
                return String.fromCharCode(curASCII + n);
            }
            else {
                if(curASCII + n > 90) curASCII -= 26;
                return String.fromCharCode(curASCII + n);
            }
        }
    }).join("");
}