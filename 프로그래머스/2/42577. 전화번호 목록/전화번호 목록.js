function solution(phone_book) {
    let array = phone_book.sort();
    return !array.some((value, index, array) => array[index + 1]?.substr(0, value.length) === value);
}