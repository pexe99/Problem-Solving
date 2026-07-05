const solution = (bandage, health, attacks) => {
    const maxHealth = health;
    let lastIndex = 0;
    for(const [time, damage] of attacks) {
        const term = time - lastIndex - 1;
        health = (health + Math.floor(term / bandage[0]) * bandage[2] + term * bandage[1]);
        if(maxHealth < health) health = maxHealth;
        health -= damage;
        lastIndex = time;
        if(health <= 0) return -1;
    }
    return health;
}