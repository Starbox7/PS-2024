function solution(n, lost, reserve) {
    var answer = 0;
    var data = [];
    
    // 학생 정보 초기화 (모두 1벌 가지고 있음)
    for (let i = 1; i <= n; i++) {
        data.push({
            count: 1,
            isReserve: false
        });
        if (lost.includes(i)) data[i-1].count -= 1;
        if (reserve.includes(i)) data[i-1].count += 1;
        if (data[i-1].count == 2) data[i-1].isReserve = true;
    }

    // 체육복 빌리기 (왼쪽과 오른쪽 확인)
    for (let i = 0; i < n; i++) {
        if (data[i].count == 0) {
            if (i > 0 && data[i-1].isReserve) {  // 왼쪽 학생 확인
                data[i-1].isReserve = false;
                data[i-1].count -= 1;
                data[i].count += 1;
            } else if (i < n-1 && data[i+1].isReserve) {  // 오른쪽 학생 확인
                data[i+1].isReserve = false;
                data[i+1].count -= 1;
                data[i].count += 1;
            }
        }
    }

    // 체육복을 가진 학생 수 계산
    data.forEach((e) => {
        if (e.count >= 1) answer += 1;
    });
    
    return answer;
}
