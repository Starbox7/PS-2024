function solution(progresses, speeds) {
    const answer = [];
    let timeToComplete = 0; // 현재 배포에 걸리는 시간을 저장
    let count = 0; // 동시에 배포되는 작업의 개수

    for (let i = 0; i < progresses.length; i++) {
        // 각 작업의 남은 진행률을 완료하는 데 필요한 시간 계산
        const remainingWork = Math.ceil((100 - progresses[i]) / speeds[i]);

        // 새로운 배포 시작
        if (remainingWork > timeToComplete) {
            if (count > 0) answer.push(count); // 이전 배포에서 완료된 작업 개수를 기록
            timeToComplete = remainingWork; // 현재 배포에 필요한 시간 업데이트
            count = 1; // 새로운 배포 시작
        } else {
            count += 1; // 기존 배포에 작업 추가
        }
    }
    
    // 마지막 배포 작업 추가
    answer.push(count);

    return answer;
}
