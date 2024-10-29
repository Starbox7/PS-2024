function solution(bandage, health, attacks) {
    var answer = 0;
    var state = {round: 1, combo: 0, combat: 0, health: health, isDead: false}
    
    while(state.combat < attacks.length && !state.isDead){
        if(attacks[state.combat][0] === state.round){
            state.combo = 0
            state.health -= attacks[state.combat][1]
            
            if(state.health <= 0) state.isDead = true
            
            state.combat += 1
        }
        else {
            state.health += bandage[1]
            state.combo += 1
            
            if(state.combo === bandage[0]){
                state.health += bandage[2]
                state.combo = 0
            }
            
            if(state.health > health) state.health = health
        }
        state.round += 1 
    }
    
    return state.isDead ? -1 : state.health;
}