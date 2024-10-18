function solution(s, skip, index) {
    var answer = [];
    var skipSet = new Set(skip)
    
    for(let i=0; i<s.length; i++){
        var temp = index
        let charCode = s[i].charCodeAt(0)
        
        while(temp){
            charCode = (charCode - 97 + 1) % 26 + 97
            let word = String.fromCharCode(charCode)
            if(!skipSet.has(word)){
                temp-=1
            }
        }
        
        answer.push(String.fromCharCode(charCode))
    }
    
    return answer.join('');
}