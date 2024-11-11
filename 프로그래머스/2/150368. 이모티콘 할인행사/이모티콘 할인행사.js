function solution(users, emoticons) {
    const getPermutation = (numbers, length) => {
        const result = [];
        const permute = (temp) => {
            if(temp.length === length) {
                result.push(temp);
                return;
            }
            for(let i = 0; i < numbers.length; i++) {
                permute([...temp, numbers[i]]);
            }
        }
        permute([]);
        return result;
    }
    
    let result = [0, 0];
    getPermutation([10, 20, 30, 40], emoticons.length).forEach((sales) => {
        const salePrice = emoticons.map((cur, idx) => cur * (100 - sales[idx]) / 100);
        let current = [0, 0];
       users.forEach(([percent, price]) => {
           let money = 0;
           for(let i = 0; i < salePrice.length; i++) {
               if(percent <= sales[i]) money += salePrice[i];
           }
           if(price <= money) current[0]++;
           else current[1] += money;
       });
        if(result[0] < current[0] || (result[0] === current[0] && result[1] < current[1])) {
            result = current;
        }
    });
    
    return result;
}