function solution(s) {
    var answer = '';
    
    let arr = s.split(" ")
    for(let i=0; i<arr.length; i++){
        let str = ''
        for(let j=0; j<arr[i].length; j++){
            if(j%2==0){
                    str += arr[i][j].toUpperCase()
            }
            else{
                    str += arr[i][j].toLowerCase()
            }
        }
        arr[i] = str;
    }
    answer = arr.join(" ")
    
    return answer;
}