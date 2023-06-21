function solution(word) {
    let counter = 0, result = 0;
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    function DFS(current) {
        counter++;
        if(word === current.join('')) result = counter;
        if(current.length !== 5) {
            alpha.forEach((v) => {
                current.push(v);
                DFS(current);
                current.pop();
            });
        }
        return;
    }
    
    let array = [];
    alpha.forEach((v) => {
        array.push(v);
        DFS(array);
        array.pop();
    });
    return result;
}