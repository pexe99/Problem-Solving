const solution = (name, yearning, photo) => {
    const yearningScore = {};
    name.forEach((n, i) => yearningScore[n] = yearning[i]);
    
    return photo.map((names) => {
        return names.reduce((acc, cur) => {
            return acc + (yearningScore[cur] || 0);
        }, 0);
    });
}