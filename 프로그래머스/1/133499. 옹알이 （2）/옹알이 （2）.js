function wordTest(word, temp){
    let array = word
    
        switch(word[0]){
            case 'a':
                if(word[1]=='y' && word[2]=='a' && temp != 'a'){
                    array = word.slice(3)
                    temp = 'a'
                    break
                }
                else return false
            case 'y':
                if(word[1]=='e'&& temp != 'y'){
                    array = word.slice(2)
                    temp = 'y'
                    break
                }   
                else return false
            case 'w':
                if(word[1]=='o' && word[2]=='o'&& temp != 'w'){
                    array = word.slice(3)
                    temp = 'w'
                    break
                }
                else return false
            case 'm':
                if(word[1]=='a'&& temp != 'm'){
                    array = word.slice(2)
                    temp='m'
                    break   
                }
                else return false
            default: 
                return false
        }
    if(array.length==0) return true
    return(wordTest(array, temp))
    }


function solution(babbling) {
    var answer = 0;
    
    babbling.forEach((e)=>{
        if(wordTest(e, '')) answer+=1
    })
    
    return answer;
}