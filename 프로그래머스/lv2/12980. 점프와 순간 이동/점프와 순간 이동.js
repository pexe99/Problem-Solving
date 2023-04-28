function solution(n)
{
    let result = 0;
    while(n) {
        if(n % 2) {
            n--;
            result++;
        }
        else n /= 2;
    }

    return result;
}