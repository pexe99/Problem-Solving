const solution = (cards1, cards2, goal) => {
    for(let i = 0, j = 0, k = 0; k < goal.length; k++) {
        if(goal[k] === cards1[i]) i++;
        else if(goal[k] === cards2[j]) j++;
        else return 'No';
    }
    return 'Yes';
}