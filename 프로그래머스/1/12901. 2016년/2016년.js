function solution(a, b) {
    var answer = '';
    const m = [31, 29, 31, 30, 31, 30, 31,  31, 30, 31, 30, 31]
    const d = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    let count = 0;
    
    for(let i=0; i<a-1; i++){
        count += m[i]
    }
    count += b-1
    count = count%7
    
    return d[count];
}