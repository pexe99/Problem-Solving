function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^0-9a-z._-]/g, "");
    new_id = new_id.replace(/[.]+/g, ".");
    new_id = new_id.replace(/^[.]|[.]$/g, "");
    if(new_id.length === 0) new_id += "a";
    new_id = new_id.substr(0, 15);
    new_id = new_id.replace(/^[.]|[.]$/g, "");
    new_id = new_id.padEnd(3, new_id.at(-1));
    return new_id;
}