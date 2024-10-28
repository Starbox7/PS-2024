function solution(players, callings) {
    var answer = [...players];
    var playerIndex = {}; 
    
    players.forEach((player, idx) => {
        playerIndex[player] = idx;
    });
    
    callings.forEach((calling) => {
        const index = playerIndex[calling];
        if (index > 0) {
            const tempPlayer = answer[index - 1];
            answer[index - 1] = calling;
            answer[index] = tempPlayer;
            
            playerIndex[calling] = index - 1;
            playerIndex[tempPlayer] = index;
        }
    });
    
    return answer;
}
