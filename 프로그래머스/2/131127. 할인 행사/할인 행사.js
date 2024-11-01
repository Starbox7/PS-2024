function solution(want, number, discount) {
    var answer = 0;
    var data = {}
    
    want.forEach((e, i) => {
        data[e] = number[i]
    })
    
    for(let i=0; i<discount.length-9; i++){
        let temp = { ...data };
        for(let j=0; j<10; j++){
            if(temp[discount[i+j]]) temp[discount[i+j]] -= 1
        }
        
        let count = false
        Object.keys(temp).forEach((e) => {
            if(temp[e] !== 0) count = true
        })
        
        
        if(count === false) answer += 1
    }
    
    return answer;
}