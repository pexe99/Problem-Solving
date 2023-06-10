function solution(n) {
    let result = Array.from({length: n}, (_) => new Array(n).fill(0));
    let counter = 1, i = 0, j = 0, direction = 0;
    while(counter !== n * n + 1) {
        result[i][j] = counter;
        counter++;
        
        if(direction === 0) {
            if(j + 1 === n || result[i][j + 1] !== 0) {
                direction = 1;
                i++;
            }
            else j++;
        }
        else if(direction === 1) {
            if(i + 1 === n || result[i + 1][j] !== 0) {
                direction = 2;
                j--;
            }
            else i++;
        }
        else if(direction === 2) {
            if(j - 1 === -1 || result[i][j - 1] !== 0) {
                direction = 3;
                i--;
            }
            else j--;
        }
        else {
            if(i - 1 === -1 || result[i - 1][j] !== 0) {
                direction = 0;
                j++;
            }
            else i--;
        }
        
    }
    return result;
}