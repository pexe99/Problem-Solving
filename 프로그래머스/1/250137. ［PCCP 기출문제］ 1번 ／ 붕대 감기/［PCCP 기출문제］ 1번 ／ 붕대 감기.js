function solution(bandage, health, attacks) {
    const maxHealth = health;
    const [casting, perSecond, addition] = bandage;
    
    let lastTime = 0;
    for(let i = 0; i < attacks.length; i++) {
        const [time, damage] = attacks[i];
        const gap = time - lastTime - 1;
        health += perSecond * gap + Math.floor(gap / casting) * addition;
        if(health > maxHealth) health = maxHealth;
        lastTime = time;
        if(health - damage <= 0) return -1;
        else health -= damage;
    }
    return health;
}