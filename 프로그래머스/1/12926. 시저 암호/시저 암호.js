function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        let char = s[i]
        let code = s.charCodeAt(i)
        
        if(code>=65 && code<=90){
            char = String.fromCharCode(((code-65+n)%26)+65)
        }
        else if(code >= 97 && code <= 122){
            char = String.fromCharCode(((code - 97 + n) % 26) + 97)
        }
        answer+=char;
    }
    
    
    
    return answer;
}