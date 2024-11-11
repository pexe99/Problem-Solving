const getPermutations = (numbers, length) => {
    const results = [];
    const generatePermutations = (current) => {
        if (current.length === length) {
            results.push(current);
            return;
        }
        numbers.forEach((number) => {
            generatePermutations([...current, number]);
        });
    };
    generatePermutations([]);
    return results;
};

const solution = (users, emoticons) => {
    let bestResult = [0, 0];
    const discountPermutations = getPermutations([10, 20, 30, 40], emoticons.length);

    discountPermutations.forEach((discounts) => {
        let [plusUsersCount, totalSales] = [0, 0];

        users.forEach(([minDiscount, minPurchase]) => {
            const userPurchase = emoticons.reduce((sum, price, idx) => {
                return minDiscount <= discounts[idx] 
                    ? sum + price * (100 - discounts[idx]) / 100 
                    : sum;
            }, 0);

            if (userPurchase >= minPurchase) {
                plusUsersCount++;
            } else {
                totalSales += userPurchase;
            }
        });

        if (plusUsersCount > bestResult[0] || 
           (plusUsersCount === bestResult[0] && totalSales > bestResult[1])) {
            bestResult = [plusUsersCount, totalSales];
        }
    });

    return bestResult;
};
