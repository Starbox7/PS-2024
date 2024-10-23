function solution(board, moves) {
    var answer = 0;
    var temp = []
    var state = board 
    
    for(let j=0; j<moves.length; j++){
        for(let i=0; i<state.length; i++){
            if(state[i][moves[j]-1] != 0){
                temp.push(state[i][moves[j]-1])
                state[i][moves[j]-1] = 0 
                break
            }
        }
    }
    
    let isPop = false
    
    while(true){
        for(let i=1; i<temp.length; i++){
            if(temp[i] == temp[i-1]){
                temp.splice(i-1, 2)
                answer += 2
                isPop = true
                break
            }
        }
        if(isPop == false) break 
        else isPop = false
    }
    
    return answer;
}