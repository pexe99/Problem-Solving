function solution(spell, dic) {
    return dic.some((cur) => [...cur].sort().toString() === spell.sort().toString()) ? 1 : 2;
}