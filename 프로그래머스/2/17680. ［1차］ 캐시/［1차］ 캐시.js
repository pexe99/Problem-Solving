const HIT = 1, MISS = 5;

function solution(cacheSize, cities) {
    let runtime = 0;
    const cache = new Map();

    cities.forEach(city => {
        city = city.toLowerCase();
        
        if (cache.has(city)) {
            runtime += HIT;
            cache.delete(city);
            cache.set(city, true);
        } else {
            runtime += MISS;
            if (cache.size >= cacheSize && cacheSize > 0) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            if(cacheSize !== 0) cache.set(city, true);
        }
    });

    return runtime;
}
