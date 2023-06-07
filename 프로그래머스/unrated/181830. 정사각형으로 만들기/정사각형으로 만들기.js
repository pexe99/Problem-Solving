function solution(arr) {
    if(arr.length > arr[0].length) {
        let addArray = new Array(arr.length - arr[0].length).fill(0);
        for(let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].concat(addArray);
        }
    }
    if(arr.length < arr[0].length) {
        const counter = arr[0].length - arr.length;
        for(let i = 0; i < counter; i++) {
            arr.push(new Array(arr[0].length).fill(0));
        }
    }
    return arr;
}