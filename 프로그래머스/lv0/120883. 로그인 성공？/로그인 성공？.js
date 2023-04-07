function solution(id_pw, db) {
    if(db.filter((cur) => cur[0] === id_pw[0] && cur[1] === id_pw[1]).length) return "login";
    else if(db.filter((cur) => cur[0] === id_pw[0]).length) return "wrong pw";
    else return "fail";
}