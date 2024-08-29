function solution(s) {
    var answer = [];
    
    for(let i=0; i<s.length; i++){
        if(i!=0){
            let v= 0;
            for(let j=0; j<i; j++){
                if(s[i]==s[j]){
                    v = i-j
                }
                else if(v==0){
                    v = -1
                }
            }
            answer.push(v)
        }
        else{
            answer.push(-1)
        }
    }
    
    return answer;
}