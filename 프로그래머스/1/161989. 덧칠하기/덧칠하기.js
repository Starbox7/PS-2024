function solution(n, m, section) {
    var answer = 0;
    var count = 1;
    
    section.forEach((number, index) => {
        if(number == count){
            answer += 1
            count += m
        }
        else if(number > count){
            answer += 1
            count = number + m 
        }
    })
    
    return answer;
}