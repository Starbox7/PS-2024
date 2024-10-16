function solution(N, stages) {
    var answer = [];
    var fail = [];
    
    // 각 스테이지마다 실패율 계산
    for (let i = 1; i <= N; i++) {
        let stageReached = stages.filter(e => e >= i).length;  // 해당 스테이지에 도달한 사용자 수
        let stageFail = stages.filter(e => e === i).length;    // 해당 스테이지에서 실패한 사용자 수
        
        // 실패율 계산 (해당 스테이지에 도달한 사람이 없으면 0으로 설정)
        let failureRate = stageReached === 0 ? 0 : stageFail / stageReached;
        fail.push({ stage: i, rate: failureRate });
    }
    
    // 실패율을 기준으로 내림차순 정렬 (같으면 스테이지 번호 기준으로 오름차순)
    fail.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    });
    
    // 정렬된 스테이지 번호를 answer 배열에 넣기
    fail.forEach(item => answer.push(item.stage));
    
    return answer;
}
