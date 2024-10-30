function solution(friends, gifts) {
    var answer = 0;
    var info = {}
    
    friends.forEach((friend, index) => {
        info[friend] = {give: 0, take: 0, gift: [], result: 0, index: index}
    })
    
    gifts.forEach((gift) => {
        const [give, take] = gift.split(" ")
        info[give].give += 1 
        info[give].gift.push(take)
        info[take].take += 1 
    })
    
    Object.keys(info).forEach((user1) => {
            Object.keys(info).forEach((user2) => {
                if( info[user1].index < info[user2].index){            
                    const a = info[user1].gift.filter(value => value === user2).length
                    const b = info[user2].gift.filter(value => value === user1).length

                    if(a > b) info[user1].result += 1
                    else if(b > a) info[user2].result += 1
                    else if(a === b){
                        if(info[user1].give-info[user1].take !== info[user2].give-info[user2].take)
                            info[user1].give-info[user1].take > info[user2].give-info[user2].take ? 
                                info[user1].result += 1 : info[user2].result += 1
                    }

                    info[user2].gift = info[user2].gift.filter(value => value !== user1)
                    info[user1].gift = info[user1].gift.filter(value => value !== user2)
                }
            })
    })
    
    Object.keys(info).forEach((user) => {
        if(info[user].result > answer) answer = info[user].result
    })
    
    return answer;
}