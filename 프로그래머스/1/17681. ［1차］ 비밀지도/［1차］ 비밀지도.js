function solution(n, arr1, arr2) {
    var answer = [];
    var map1 = []
    var map2 = []
    
    let temp = ""
    
    for(let i=0; i<n; i++){
        const str1 = arr1[i].toString(2)
        const str2 = arr2[i].toString(2)
        const result1 = str1.padStart(n, '0')
        const result2 = str2.padStart(n, '0')
        
        map1.push(result1.split(''))
        map2.push(result2.split(''))
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(map1[i][j]==0 && map2[i][j]==0){
                temp += " "
            }
            else {
                temp += "#"
            }
        }
        answer.push(temp)
        temp = ""
    }
    
    return answer;
}