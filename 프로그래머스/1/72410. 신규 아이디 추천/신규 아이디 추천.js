function solution(new_id) {
    var answer = new_id;
    
    answer = answer.toLowerCase();
    
    const defaultRegex = new RegExp('[^a-z0-9\\-_.]', 'g')
    answer = answer.replace(defaultRegex, '')
    
    const multiDotRegex = new RegExp('\\.{2,}', 'g')
    answer = answer.replace(multiDotRegex, ".")
    
    const startAndFinishDotRegex = new RegExp('^\\.|\\.$', 'g')
    answer = answer.replace(startAndFinishDotRegex, '')
    
    if(answer === '') answer = "a"
    
    if(answer.length > 15) answer = answer.slice(0, 15)
    answer = answer.replace(startAndFinishDotRegex, '')
    
    while(answer.length < 3) answer += answer[answer.length-1]
    
    return answer;
}