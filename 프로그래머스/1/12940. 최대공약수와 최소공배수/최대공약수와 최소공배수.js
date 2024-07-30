function solution(n, m) {
    var answer = [];
    var nm = n*m;
    
    while(1){
        var rem = n%m
        if(rem == 0) {
            answer.push(m)
            break;
        }
        
        n = m;
        m = rem;
        
    }
    
    answer.push((nm)/answer[0])
    
    return answer;
}