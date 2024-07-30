function solution(n, m) {
    var answer = [];
    var a = n;
    var b = m;
    
    while(1){
        var rem = n%m
        if(rem == 0) {
            answer.push(m)
            break;
        }
        
        n = m;
        m = rem;
        
    }
    
    answer.push((a*b)/answer[0])
    
    return answer;
}