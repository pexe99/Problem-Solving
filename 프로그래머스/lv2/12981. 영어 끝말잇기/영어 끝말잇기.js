function solution(n, words) {
    let wordChain = {};
    wordChain[words[0]] = 0;

    for(let i = 1; i < words.length; i++) {
        if(words[i] in wordChain || words[i - 1].at(-1) !== words[i].at(0)) return [i % n + 1, Math.floor(i / n) + 1];
        wordChain[words[i]] = i;
    }

    return [0, 0];
}