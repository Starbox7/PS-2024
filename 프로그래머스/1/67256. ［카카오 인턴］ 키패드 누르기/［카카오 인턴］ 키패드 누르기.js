function calculator(x, y, left, right, number, hand){
    const leftDistance = Math.abs(x[left]-x[number]) + Math.abs(y[left]-y[number])
    const rightDistance = Math.abs(x[right]-x[number]) + Math.abs(y[right]-y[number])
    
    if(leftDistance < rightDistance) return "left"
    else if(rightDistance < leftDistance) return "right"
    else {
        return hand === "left" ? "left" : "right"
    }
}

function solution(numbers, hand) {
    var answer = [];
    var left = '*'
    var right = '#'
    var x = {1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 2, 8: 2, 9: 2, '*': 3, 0: 3, '#': 3};
    var y = {1: 0, 4: 0, 7: 0, '*': 0, 2: 1, 5: 1, 8: 1, 0: 1, 3: 2, 6: 2, 9: 2, '#': 2};
    
    numbers.forEach(number => {
        switch(number){
            case 1: case 4: case 7: 
                answer.push("L")
                left = number
                break
            case 3: case 6: case 9: 
                answer.push("R")
                right = number
                break
            default:
                const result = calculator(x, y, left, right, number, hand)
                if(result === "left"){
                    answer.push("L")
                    left = number
                }
                else {
                    answer.push("R")
                    right = number
                }
        }
    })
    
    return answer.join('');
}