function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replaceAll(/[^0-9a-z._-]/g, '')
        .replaceAll(/[.]+/g, '.')
        .replaceAll(/^[.]|[.]$/g, '')
        .replaceAll(/^$/g, 'a')
        .slice(0, 15)
        .replaceAll(/^[.]|[.]$/g, '');
    
    return new_id.length <= 2 ? new_id.padEnd(3, new_id.at(-1)) : new_id;
}