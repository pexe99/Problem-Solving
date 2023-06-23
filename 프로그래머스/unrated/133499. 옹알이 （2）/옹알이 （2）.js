function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    let replaced = babbling.map((v) => {
        word.forEach((w, i) => v = v.replaceAll(w, i + 1));
        return v;
    });
    
    return replaced.reduce((result, current) => {
        if(Number(current)) {
            if(current.includes("11")) return result;
            if(current.includes("22")) return result;
            if(current.includes("33")) return result;
            if(current.includes("44")) return result;
            return result += 1;
        }
        return result;
    }, 0);
}