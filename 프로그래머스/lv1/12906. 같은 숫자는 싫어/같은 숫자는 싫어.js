function solution(arr)
{
    if(arr.length === 0) return arr;
    else {
        let answer = [];
        answer.push(arr[0]);
    
        for(num of arr) {
            if(num !== answer[answer.length - 1]) answer.push(num);
        }
    
        return answer;
    }
}