function solution(s) {
    let answer = 0;
    let index = 0;  // 문자열에서 현재 위치를 추적하는 변수
    
    while (index < s.length) {
        let first = s[index];  // 현재 부분의 첫 번째 문자
        let yes = 0;  // 첫 번째 문자와 같은 문자의 개수
        let no = 0;  // 첫 번째 문자와 다른 문자의 개수
        
        // 현재 위치부터 문자열 끝까지 탐색
        for (let i = index; i < s.length; i++) {
            if (s[i] === first) {
                yes += 1;  // 첫 번째 문자와 같으면 yes 증가
            } else {
                no += 1;  // 다르면 no 증가
            }
            
            // 같은 수의 문자가 모이면 분리
            if (yes === no) {
                answer += 1;  // 분리 카운트 증가
                index = i + 1;  // 새로운 위치로 이동
                break;
            }

            // 문자열 끝까지 탐색했을 경우
            if (i === s.length - 1) {
                answer += 1;  // 남은 부분을 한 번 카운트
                index = s.length;  // 끝까지 탐색 완료
            }
        }
    }
    
    return answer;
}
