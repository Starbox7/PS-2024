function solution(name, yearning, photo) {
    var answer = [];
    let temp = 0;
    
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<name.length; j++){
            if(photo[i].includes(name[j])) temp += yearning[j]
        }
        answer.push(temp)
        temp = 0
    }
    
    return answer;
}