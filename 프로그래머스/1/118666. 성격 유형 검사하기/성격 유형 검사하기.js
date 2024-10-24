function calculator(number){
    if(number === 1 || number === 7) return 3
    else if(number === 2 || number === 6) return 2
    else if(number === 3 || number === 5) return 1
}

function solution(survey, choices) {
    var answer = [];
    var score = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
    
    for(let i=0; i<survey.length; i++){
        if(choices[i] < 4) score[survey[i][0]] += calculator(choices[i])
        else if(choices[i] > 4) score[survey[i][1]] += calculator(choices[i])
    }
    
    answer.push(score.R >= score.T ? "R" : "T")
    answer.push(score.C >= score.F ? "C" : "F")
    answer.push(score.J >= score.M ? "J" : "M")
    answer.push(score.A >= score.N ? "A" : "N")
    
    return answer.join('');
}