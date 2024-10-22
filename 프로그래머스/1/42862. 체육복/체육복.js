function solution(n, lost, reserve) {
    var answer = 0;
    var data = []
    
    for(let i=1; i<=n; i++){
        data.push({
            count: 1,
            isReserve: false
        })
        if(lost.includes(i)) data[i-1].count -=1 
        if(reserve.includes(i)) data[i-1].count +=1
        if(data[i-1].count == 2) data[i-1].isReserve = true
    }
    
    for(let i=0; i<n; i++){
        if(data[i].count == 0 && ((i>0 && data[i-1].isReserve) || (i<n-1 && data[i+1].isReserve) && !((i>0 && data[i-1].isReserve) && (i<n-1 && data[i+1].isReserve)))){
            if(i>0 && data[i-1].isReserve){
                data[i-1].isReserve = false
                data[i-1].count -= 1
                data[i].count += 1
            }
            else if(i<n-1 && data[i+1].isReserve){
                data[i+1].isReserve = false
                data[i+1].count -= 1
                data[i].count += 1
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(data[i].count == 0 && (i>0 && data[i-1].isReserve) || (i<n-1 && data[i+1].isReserve)){
            if(i>0 && data[i-1].isReserve){
                data[i-1].isReserve = false
                data[i-1].count -= 1
                data[i].count += 1
            }
            else if(i<n-1 && data[i+1].isReserve){
                data[i+1].isReserve = false
                data[i+1].count -= 1
                data[i].count += 1
            }
        }
    }
    
    data.forEach((e) => {
        if(e.count >= 1) answer += 1
    })
    
    return answer;
}