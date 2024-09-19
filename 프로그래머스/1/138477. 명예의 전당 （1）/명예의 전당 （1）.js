function solution(k, score) {
    var answer = [];
    let array = []
    
    for(let i=0; i<score.length; i++){
        array.push(score[i])
        if(i<=k-1){
            answer.push(Math.min(...array))
        }
        else{
            const sort = [...array].sort((a, b) => b-a)
            answer.push(sort[k-1])
        }
    }
    
    return answer;
}