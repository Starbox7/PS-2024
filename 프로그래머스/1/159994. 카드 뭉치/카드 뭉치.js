function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let count1 = 0;
    let count2 = 0;
    
    for(let i=0; i<goal.length; i++){
        if(goal[i] == cards1[count1]){
            count1++
        }
        else if(goal[i] == cards2[count2]){
            count2++
        }
        else{
            answer = 'No'
        }
    }
        
    return answer;
}