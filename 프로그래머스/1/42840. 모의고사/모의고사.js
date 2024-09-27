function solution(answers) {
    var answer = [];
    let a = {count:0, answer: [1,2,3,4,5], score:0}
    let b = {count:0, answer: [2,1,2,3,2,4,2,5], score:0}
    let c = {count:0, answer: [3,3,1,1,2,2,4,4,5,5], score:0}
    
    for(let i=0; i<answers.length; i++){
        if(answers[i]==a.answer[a.count]){
            a.score += 1
        } 
        a.count = (a.count + 1) % a.answer.length;
        
        if(answers[i]==b.answer[b.count]){
            b.score +=1
        } 
        b.count = (b.count + 1) % b.answer.length;
        
        if(answers[i]==c.answer[c.count]){
            c.score +=1
        } 
        c.count = (c.count + 1) % c.answer.length;
    }
    
    let maxScore = Math.max(a.score, b.score, c.score);

    if (a.score == maxScore) answer.push(1);
    if (b.score == maxScore) answer.push(2);
    if (c.score == maxScore) answer.push(3);
    
    return answer
}