const getLeastNum = (number) => {
    let binaryNum = [...number.toString(2)];
    if(binaryNum.filter((e) => e === "0").length === 0)
        return parseInt(["1", "0", ...binaryNum.slice(1)].join(""), 2);
    for(let i = binaryNum.length - 1; 0 <= i; i--) {
        if(binaryNum[i] === "0") {
            binaryNum[i] = "1";
            if(i !== binaryNum.length - 1) {
                for(let j = i + 1; j < binaryNum.length; j++) {
                    if(binaryNum[j] === "1") {
                        binaryNum[j] = "0";
                        break;
                    }
                }
            }
            break;
        }
    }
    return parseInt(binaryNum.join(""), 2);
}

function solution(numbers) {
    return numbers.map((number) => getLeastNum(number));
}