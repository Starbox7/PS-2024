function solution(progresses, speeds) {
    const answer = [];
    let timeToComplete = 0; 
    let count = 0; 

    for (let i = 0; i < progresses.length; i++) {
        
        const remainingWork = Math.ceil((100 - progresses[i]) / speeds[i]);
       
        if (remainingWork > timeToComplete) {
            if (count > 0) answer.push(count);
            timeToComplete = remainingWork; 
            count = 1; 
        } else {
            count += 1; 
        }
    }
    
    answer.push(count);

    return answer;
}
