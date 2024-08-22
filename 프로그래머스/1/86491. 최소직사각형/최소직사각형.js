function solution(sizes) {
    var answer = 0;
    
    let x = 0;
    let y = 0;
    
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0]>sizes[i][1]){
            if(sizes[i][0]>x){
                x = sizes[i][0]
            }
            if(sizes[i][1]>y){
                y = sizes[i][1]
            }
        }
        else{
            if(sizes[i][1]>x){
                x = sizes[i][1]
            }
            if(sizes[i][0]>y){
                y = sizes[i][0]
            }
        }
    }
    
    answer = x*y
    
    return answer;
}