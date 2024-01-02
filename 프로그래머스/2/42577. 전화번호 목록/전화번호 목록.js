function solution(phone_book) {
    let result = true;
    let array = phone_book.sort();
    result = !array.some((value, index, array) => array[index + 1]?.substr(0, value.length) === value);
    return result;
}