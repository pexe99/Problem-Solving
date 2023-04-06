function solution(emergency) {
    let copyArray = emergency.slice();
    copyArray.sort((a, b) => b - a);
    return emergency.map((cur) => copyArray.indexOf(cur) + 1);
}