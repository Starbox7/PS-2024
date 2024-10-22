function solution(X, Y) {
    let answer = '';
    const xCount = Array(10).fill(0); // 0부터 9까지 숫자의 빈도를 저장
    const yCount = Array(10).fill(0); // 0부터 9까지 숫자의 빈도를 저장
    
    // X와 Y에서 각 숫자의 빈도를 카운팅
    X.split('').forEach(num => xCount[num]++);
    Y.split('').forEach(num => yCount[num]++);
    
    // 공통 숫자를 내림차순으로 큰 값부터 사용
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(xCount[i], yCount[i]); // 두 배열에서 공통적으로 나타나는 숫자의 개수
        answer += i.toString().repeat(commonCount); // 공통 개수만큼 숫자를 추가
    }

    // 공통된 숫자가 없으면 -1 반환
    if (answer === '') return '-1';
    
    // 결과가 모두 0이면 '0' 반환
    if (answer[0] === '0') return '0';
    
    return answer;
}
