const getPermutations = (arr) => {
    const result = [];
    const permute = (temp, rest) => {
        if (rest.length === 0) {
            result.push(temp);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            permute([...temp, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
        }
    };
    permute([], arr);
    return result;
};

function solution(n, weak, dist) {
    let result = Infinity;
    const distPermutations = getPermutations(dist);

    for (let i = 0; i < weak.length; i++) {
        const shifted = [...weak.slice(i), ...weak.slice(0, i).map(w => w + n)];
        for (const perm of distPermutations) {
            let counter = 0;
            let covered = 0;
            for (let j = 0; j < perm.length; j++) {
                const limit = shifted[covered] + perm[j];
                counter++;
                while (covered < shifted.length && shifted[covered] <= limit) covered++;
                if (covered >= shifted.length) {
                    result = Math.min(result, counter);
                    break;
                }
            }
        }
    }

    return result === Infinity ? -1 : result;
}
