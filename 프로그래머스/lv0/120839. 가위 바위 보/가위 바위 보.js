function solution(rsp) {
    return [...rsp].map((cur) => {
        if(cur === "2") return "0";
        else if(cur === "0") return "5";
        else return "2";
    }).join("");
}