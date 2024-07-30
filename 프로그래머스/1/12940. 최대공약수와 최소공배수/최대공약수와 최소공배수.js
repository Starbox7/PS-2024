function solution(n, m) {
    var answer = [];
    var large = 0;
    var small = 0;
    
    if(n>m){
        large = n;
        small = m
    }else{
        large = m;
        small = n;
    }
    
    while(1){
        var rem = large%small
        if(rem == 0) {
            answer.push(small)
            break;
        }
        
        large = small;
        small = rem;
        
    }
    
    answer.push((n*m)/answer[0])
    
    return answer;
}