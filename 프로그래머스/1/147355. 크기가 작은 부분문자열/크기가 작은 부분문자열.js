function solution(t, p) {
    var answer = 0;
    
    var tLen = t.length
    var pLen = p.length
    
    for(var i=0; i<tLen-pLen+1; i++){
         if(t.substring(i, i + pLen)<=p){
             answer+=1;
         }
    }
    
    return answer;
}