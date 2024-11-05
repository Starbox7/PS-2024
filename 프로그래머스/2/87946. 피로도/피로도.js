function solution(k, dungeons) {
    let maxDungeons = 0;

    function exploreDungeons(currentFatigue, dungeonsVisited, dungeonsLeft) {
        maxDungeons = Math.max(maxDungeons, dungeonsVisited);

        for (let i = 0; i < dungeonsLeft.length; i++) {
            const [minFatigue, fatigueCost] = dungeonsLeft[i];
            
            if (currentFatigue >= minFatigue) { 
                const nextDungeonsLeft = [...dungeonsLeft.slice(0, i), ...dungeonsLeft.slice(i + 1)];
                
                exploreDungeons(currentFatigue - fatigueCost, dungeonsVisited + 1, nextDungeonsLeft);
            }
        }
    }

    exploreDungeons(k, 0, dungeons);
    
    return maxDungeons;
}
