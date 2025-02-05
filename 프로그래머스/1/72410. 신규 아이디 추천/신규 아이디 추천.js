function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^0-9a-z._-]/g, "")
        .replace(/[.]+/g, ".")
        .replace(/^[.]|[.]$/g, "")
        .replace(/^$/g, "a")
        .slice(0, 15).replace(/^[.]|[.]$/g, "");
    
    return new_id.length <= 2 ? new_id.padEnd(3, new_id.at(-1)) : new_id;
}