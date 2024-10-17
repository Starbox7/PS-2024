function solution(lottos, win_nums) {
    var answer = [];
    var win = 0
    var zero = 0
    
    lottos.forEach((number)=> {
        if(number == 0) zero+=1
        else
        win_nums.forEach((e) => {
            if(number == e) win+=1
        })
    })
    
    7-win-zero == 7 ? answer.push(6) : answer.push(7-win-zero)
    7-win == 7 ? answer.push(6) : answer.push(7-win)
    
    return answer;
}