function solution(genres, plays) {
    let music = [];
    let genrePlays = {};
    genres.forEach((v, i) => {
        music.push({idx: i, genre: v, play: plays[i]});
        genrePlays[v] = (genrePlays[v] || 0) + plays[i];
    });
    
    music.sort((a, b) => genrePlays[b.genre] - genrePlays[a.genre] || b.play - a.play);
    
    let genreCounter = {};
    let result = [];
    
    music.forEach((v) => {
        if(genreCounter[v.genre] !== 2) {
            genreCounter[v.genre] = (genreCounter[v.genre]  || 0) + 1;
            result.push(v.idx);
        }
    })
    
    return result;
}