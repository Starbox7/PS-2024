function solution(nums) {
    var answer = 0;
    let temp = []
    
    for(let i=0; i<nums.length; i++){
        if(!temp.includes(nums[i])){
            temp.push(nums[i])
            answer++
        }
    }
    if(answer>nums.length/2){
       answer = nums.length/2
    }
    
    return answer;
}