function solution(msg) {
    const dictionary = {};
    const A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0);
    for(let i = A; i <= Z; i++) {
        dictionary[String.fromCharCode(i)] = i - A + 1;
    }
    
    let index = Z - A + 1, base = "";
    const answer= [0];
    [...msg].forEach((char) => {
        base += char;
        if(!dictionary.hasOwnProperty(base)) {
            dictionary[base] = ++index;
            base = char;
            answer.push(dictionary[base]);
        }
        else
            answer[answer.length - 1] = dictionary[base];
    })
    
    return answer;
}