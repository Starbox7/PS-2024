function solution(food) {
    var answer = [];
    let count = 1;
    let result = []
    
    for(let i=1; i<food.length; i++){
        food[i] = food[i]-food[i]%2
        for(let j=0; j<food[i]/2; j++){
            result.push(count)
            answer.push(count)
        }
        count++
    }
    answer.push(0)
    
    for(let i=result.length-1; i>=0; i--){
        answer.push(result[i])
    }
    
    return answer.join('')
}