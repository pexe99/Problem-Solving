const solution = (a) => {
    let min = Infinity, minIndex = 0;
    let leftMin = Infinity, rightMin = Infinity;
    a.forEach((e, i) => {
        if(e < min) {
            min = e;
            minIndex = i;
        }
    });
    
    let result = 0;
    for(let i = 0; i < minIndex; i++) {
        if(a[i] < leftMin) {
            leftMin = a[i]; result++;
        }
    }
    
    for(let i = a.length - 1; i > minIndex; i--) {
        if(a[i] < rightMin) {
            rightMin = a[i]; result++;
        }
    }
    
    return result + 1;
}