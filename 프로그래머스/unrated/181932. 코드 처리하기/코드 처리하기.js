function solution(code) {
    let ret = "", mode = false;
    for(let i = 0; i < code.length; i++) {
        if(code[i] === "1") {
            mode = !mode;
            continue;
        } 
        if(!mode && !(i % 2)) ret += code[i];
        if(mode && i % 2) ret += code[i];
    }
    return ret === "" ? "EMPTY" : ret;
}