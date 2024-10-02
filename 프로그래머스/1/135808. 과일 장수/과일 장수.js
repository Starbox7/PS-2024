function solution(k, m, score) {
    var answer = 0;
    
    let sortedArray = score.sort((a, b) => b - a)
    for(let i=0; i+m-1<sortedArray.length; i+=m){
        answer += sortedArray[i+m-1] * m
    }
    
    return answer;
}

