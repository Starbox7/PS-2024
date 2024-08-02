function solution(n) {
    var answer = 0;
    
    let ternary = n.toString(3);
    
    let reversedString = ternary.split('').reverse().join('');
    
    answer = parseInt(reversedString, 3);
    
    return answer;
}